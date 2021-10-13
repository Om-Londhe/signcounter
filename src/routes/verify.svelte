<script>
	import { addDoc, collection, getDoc, getFirestore, query, where } from '@firebase/firestore';
	import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
	import Loader from '../components/commons/loader.svelte';
	import { user } from '../../services/stores';
	import { getApp } from '@firebase/app';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const auth = getAuth(getApp());

	onMount(() => {
		if (isSignInWithEmailLink(auth, location.href)) {
			let email = localStorage.getItem('loginEmail');
			if (!email) {
				email = prompt('Please provide your email for confirmation');
			}
			signInWithEmailLink(auth, email, location.href)
				.then((result) => {
					localStorage.removeItem('loginEmail');
					if (result.additionalUserInfo.isNewUser) {
						addDoc(collection(getFirestore(), 'Users'), {
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
						getDoc(query(collection(getFirestore(), 'Users'), where('email', '==', email)))
							.then((value) => {
								localStorage.setItem('userID', value.id);
								user.update((_) => ({
									id: value.id,
									email,
									passwords: value.data().passwords
								}));
								goto('/dashboard');
							})
							.catch((error) => alert(error));
					}
				})
				.catch((error) => {
					alert(error);
				});
		}
	});
</script>

<Loader text="Logging you in!" />
