import { Router } from "express";
//Importando os métodos de Logar e Criar usuário do Firebase
import { auth } from "../services/firebaseConfig.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const router = Router();
let dataUser = [];

//Lógica das rotas de SignIn e SignUp:

//Recupero os dados passados no Body da aplicação e passo como parametro da função de logar um usuário
//Caso ocorra um erro é enviado o tipo de erro ocorrido
//Caso o login ou cadastro ocorra com sucesso é retornado as informações do usuário

//Rota para recuperar dados do usuário
router.get("/", (req, res) => {
  if (dataUser.length > 0) {
    res.json(dataUser);
  } else {
    res.json({ error: "Não consegui encontrar esse usuário" });
  }
});

//Rota de Login
router.post("/signIn", (req, res) => {
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      dataUser[0] = response.user;
      res.json(response.user);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          res.json({ error: "Usuário não encontrado!" });
          break;

        case "auth/wrong-password":
          res.json({ error: "Senha incorreta!" });
          break;

        default:
          res.json(error.code);
          break;
      }
    });
});

//Rota de Cadastro
router.post("/signUp", (req, res) => {
  const { email, password } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.json(userCredential.user);
    })
    .catch((error) => {
      if (error.code == "auth/email-already-in-use") {
        res.json({ error: "Já existe um usuário com esse Email" });
      }
    });
});

export const formRouter = router; //Exportando a rota de Formulário
