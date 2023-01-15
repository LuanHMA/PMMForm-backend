//Importações padrões do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Objeto de configuração do Firebase que é gerado ao criar um novo projeto na plataforma.
const firebaseConfig = {
  apiKey: "AIzaSyCSDJKC4fmI8VdXDEPJiqLzrWwJrrcO_sE",
  authDomain: "formloginteste.firebaseapp.com",
  projectId: "formloginteste",
  storageBucket: "formloginteste.appspot.com",
  messagingSenderId: "904771586831",
  appId: "1:904771586831:web:4c26fd0a97fd4d99e58c7a",
};

const app = initializeApp(firebaseConfig); //Inicializa o Firebase
export const auth = getAuth(app); //Constante responsável por inicializar a autenticação
