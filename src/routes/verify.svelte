<script>
	import {
		addDoc,
		collection,
		getDoc,
		getDocs,
		getFirestore,
		query,
		where
	} from 'firebase/firestore';
	import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
	import { user } from '../../services/stores';
	import { getFirebaseApp } from '../../services/firebase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Loader from '../components/commons/loader.svelte';

	onMount(() => {
		const auth = getAuth(getFirebaseApp());
		const db = getFirestore(getFirebaseApp());
		if (isSignInWithEmailLink(auth, location.href)) {
			let email = localStorage.getItem('loginEmail');
			if (!email) {
				email = prompt('Please provide your email for confirmation');
			}
			signInWithEmailLink(auth, email, location.href)
				.then((result) => {
					localStorage.removeItem('loginEmail');
					if (result._tokenResponse.isNewUser) {
						console.log('isNew');
						addDoc(collection(db, 'Users'), {
							email,
							passwords: []
						})
							.then((value) => {
								localStorage.setItem('userID', value.id);
								user.update((_) => ({
									id: value.id,
									email,
									passwords: []
								}));
								goto('/dashboard');
							})
							.catch((error) => alert(error));
					} else {
						getDocs(query(collection(db, 'Users'), where('email', '==', email)))
							.then((value) => {
								localStorage.setItem('userID', value.docs[0].id);
								user.update((_) => ({
									id: value.docs[0].id,
									email,
									passwords: value.docs[0].data().passwords
								}));
								goto('/dashboard');
							})
							.catch((error) => alert(error));
					}
				})
				.catch((error) => alert(`siwel-${error}`));
		}
	});
</script>

<Loader text="Logging you in!" />
