// Importar Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app RetroStore
const firebaseConfig = {
  apiKey: "AIzaSyCmPyrgyrlVQ6htNeQEh5FS-pGxwVZT490",
  authDomain: "retrostore-4f756.firebaseapp.com",
  projectId: "retrostore-4f756",
  storageBucket: "retrostore-4f756.appspot.com", // ⚠️ corregí .app por .appspot.com
  messagingSenderId: "1059376680769",
  appId: "1:1059376680769:web:52a1ecb2025c1c80021bc0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore para usar en la app
export const db = getFirestore(app);
