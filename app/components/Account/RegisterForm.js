import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { validateEmail } from './../../utils/validations';
import * as firebase from 'firebase';
import Loading from './../Loadings';
import { withNavigation } from 'react-navigation';

const RegisterForm = (props) => {
	const { toastRef, navigation } = props;
	const [ hidePassword, setHidePassword ] = useState(true);
	const [ hideRepeatedPassword, sethideRepeatedPassword ] = useState(true);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isVisibleLoading, setIsVisibleLoading ] = useState(false);
	const [ repeatPassword, setRepeatPassword ] = useState('');
	const register = async () => {
		setIsVisibleLoading(true);
		if (!email || !password || !repeatPassword) {
			toastRef.current.show('Todos los campos son obligatorios');
		} else {
			if (!validateEmail(email)) {
				toastRef.current.show('El E-mail es incorrecto');
			} else {
				if (password !== repeatPassword) {
					toastRef.current.show('Las contrseñas no son iguales');
				} else {
					await firebase
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then((resp) => {
							//toastRef.current.show('Usuario Creado Correctamente');
							navigation.navigate('MyAccount');
						})
						.catch((err) => {
							toastRef.current.show('Error al crear el Usuario');
						});
				}
			}
		}

		setIsVisibleLoading(false);
	};

	return (
		<View style={styles.formContainer} behavior="padding" enabled>
			<Input
				placeholder="Correo Electronico"
				containerStyle={styles.inputForm}
				onChange={(e) => setEmail(e.nativeEvent.text)}
				rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight} />}
			/>
			<Input
				placeholder="Contraseña"
				password={true}
				secureTextEntry={hidePassword}
				containerStyle={styles.inputForm}
				onChange={(e) => setPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type="material-community"
						name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => setHidePassword(!hidePassword)}
					/>
				}
			/>

			<Input
				placeholder="Repetir Contraseña"
				password={true}
				secureTextEntry={hideRepeatedPassword}
				containerStyle={styles.inputForm}
				onChange={(e) => setRepeatPassword(e.nativeEvent.text)}
				rightIcon={
					<Icon
						type="material-community"
						name={hideRepeatedPassword ? 'eye-outline' : 'eye-off-outline'}
						iconStyle={styles.iconRight}
						onPress={() => sethideRepeatedPassword(!hideRepeatedPassword)}
					/>
				}
			/>
			<Button
				title="Unirse"
				containerStyle={styles.btnContainerRegister}
				buttonStyle={styles.btnRegister}
				onPress={register}
			/>
			<Loading text="Creando Cuenta" isVisible={isVisibleLoading} />
		</View>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30
	},
	inputForm: {
		width: '100%',
		marginTop: 20
	},
	iconRight: {
		color: '#c1c1c1'
	},
	btnContainerRegister: {
		marginTop: 20,
		width: '95%'
	},
	btnRegister: {
		backgroundColor: '#00a680'
	}
});

export default withNavigation(RegisterForm);
