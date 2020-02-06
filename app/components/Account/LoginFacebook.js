import React, { useState } from 'react';
import { SocialIcon } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { FacebookApi } from '../../utils/Social';
import Loading from '../Loadings';

const LoginFacebook = () => {
	/* const login = async () => {
		 await Facebook.initializeAsync(FacebookApi.application_id);
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(FacebookApi.application_id, {
			permissions: FacebookApi.permissions
		}); 
		await Facebook.initializeAsync(FacebookApi.application_id);
		const {
			type,
			token,
			expires,
			permissions,
			declinedPermissions
		} = await Facebook.logInWithReadPermissionsAsync({
			permissions: [ 'public_profile' ]
		});
		console.log(type);
		if (type === 'success') {
			const credentials = firebase.auth.FacebookAuthProvider.credential(token);
			await firebase
				.auth()
				.signInWithCredential(credentials)
				.then(() => {
					console.log('Loggin correcto');
				})
				.catch((err) => {
					console.log('Error Accediendo con facebook');
				});
		} else if (type === 'cancel') {
			console.log('Inicio de sesion cancelado');
		} else {
			console.log('Error desconocido');
		}
		console.log(type);
	}; */

	const login = async () => {
		try {
			await Facebook.initializeAsync('2378552489123518');
			const { type, token } = await Facebook.logInWithReadPermissionsAsync(FacebookApi.application_id, {
				permissions: FacebookApi.permissions
			});
			if (type === 'success') {
				setIsLoading(true);
				const credentials = firebase.auth.FacebookAuthProvider.credential(token);
				await firebase
					.auth()
					.signInWithCredential(credentials)
					.then(() => {
						navigation.navigate('MyAccount');
					})
					.catch(() => {
						toastRef.current.show('Error accediendo con Facebook, inténtelo más tarde');
					});
			} else if (type === 'cancel') {
				toastRef.current.show('Inicio de sesión cancelado');
			} else {
				toastRef.current.show('Error desconocido, inténtelo más tarde');
			}
			setIsLoading(false);
		} catch ({ message }) {
			alert(`Facebook Login Error: ${message}`);
		}
	};
	return <SocialIcon title="Iniciar Sesion con Facebook" button type="facebook" onPress={login} />;
};

export default LoginFacebook;
