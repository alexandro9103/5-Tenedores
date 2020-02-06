import React, { useRef } from 'react';

import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Account/RegisterForm';
import Toast from 'react-native-easy-toast';

const Register = () => {
	const toastRef = useRef();

	return (
		<KeyboardAwareScrollView>
			<Image
				source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
				style={styles.logo}
				resizeMode="contain"
			/>

			<View style={styles.viewForm}>
				<RegisterForm toastRef={toastRef} />
			</View>
			<Toast ref={toastRef} position="center" opacity={0.5} />
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	logo: {
		height: 150,
		width: '100%',
		marginTop: 20
	},
	viewForm: {
		marginLeft: 40,
		marginRight: 40
	}
});

export default Register;
