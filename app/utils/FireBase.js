import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCbiZ-DoNe3xnXtUysC3VeOXC2mHpWorQ8',
	authDomain: 'tenedores-90c46.firebaseapp.com',
	databaseURL: 'https://tenedores-90c46.firebaseio.com',
	projectId: 'tenedores-90c46',
	storageBucket: 'tenedores-90c46.appspot.com',
	messagingSenderId: '100533918707',
	appId: '1:100533918707:web:7b8035dae632a1663d1086'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
