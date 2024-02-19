// Importa las funciones que necesitas de los SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Tu configuración de Firebase para la aplicación web
export const environment = {
	production: false,
	firebaseConfig: {
		apiKey: "AIzaSyAFU684-E8EQdvH3qcM0zcNfxGSHNz9Wt4",
		authDomain: "ap-frontend23.firebaseapp.com",
		projectId: "ap-frontend23",
		storageBucket: "ap-frontend23.appspot.com",
		messagingSenderId: "322639668800",
		appId: "1:322639668800:web:46caac150435e629cea1a5"
		}
};

// Inicializa la aplicación de Firebase con la configuración proporcionada
//const firebaseApp = initializeApp(firebaseConfig);

// Exporta la configuración como parte del entorno
//export const environment = {
//  firebase: firebaseConfig,
//};