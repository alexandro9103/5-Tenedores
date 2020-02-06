import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
const UserLogged = () => {
	return (
		<View>
			<Text>User Logged</Text>
			<Button title="Cerrar Sesion" onPress={async () => await firebase.auth().signOut()} />
		</View>
	);
};

export default UserLogged;
