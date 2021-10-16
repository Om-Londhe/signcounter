const timestamp = 1634370126179;
const build = [
  "/_app/start-7075686c.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-edc31b86.js",
  "/_app/error.svelte-923d0d04.js",
  "/_app/pages/index.svelte-af4628de.js",
  "/_app/assets/pages/index.svelte-4b336627.css",
  "/_app/pages/dashboard/__layout.svelte-4b0cbd94.js",
  "/_app/assets/pages/dashboard/__layout.svelte-1732c599.css",
  "/_app/pages/dashboard/index.svelte-3aeee2b3.js",
  "/_app/assets/pages/dashboard/index.svelte-773bdcf8.css",
  "/_app/pages/dashboard/manage.svelte-91f5eaf7.js",
  "/_app/assets/pages/dashboard/manage.svelte-58931106.css",
  "/_app/pages/verify.svelte-1d2f5da5.js",
  "/_app/chunks/vendor-c53e2aa3.js",
  "/_app/chunks/singletons-12a22614.js",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/loader-ef6a9610.js",
  "/_app/assets/loader-8e602be2.css",
  "/_app/chunks/snackbar-9e55794d.js",
  "/_app/assets/snackbar-58363d24.css",
  "/_app/chunks/firebase-3e4355ad.js",
  "/_app/chunks/stores-31a253bf.js",
  "/_app/chunks/activityIndicator-236182aa.js",
  "/_app/assets/activityIndicator-4da3c755.css"
];
const files = [
  "/blob-scene-mobile.svg",
  "/blob-scene-tab.svg",
  "/blob-scene.svg",
  "/favicon.png",
  "/icon.png",
  "/icon_192.png",
  "/icon_512.png",
  "/layer-wave-separator.svg",
  "/logo.svg",
  "/manifest.json",
  "/moon.png",
  "/mountains_behind.png",
  "/mountains_front.png",
  "/stars.png",
  "/svelte.png",
  "/wave-bottom-separator.svg",
  "/wave.png"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
