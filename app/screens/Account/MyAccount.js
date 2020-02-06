import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { View, Text } from 'react-native';
import Loading from '../../components/Loadings';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';

const MyAccount = () => {
	const [ login, setLogin ] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			!user ? setLogin(false) : setLogin(true);
		});
	}, []);

	if (login === null) {
		return <Loading isVisible={true} text="Cargando..." />;
	}

	return login ? <UserLogged /> : <UserGuest />;
};

export default MyAccount;
