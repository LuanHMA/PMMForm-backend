import Express from "express";
import { formRouter } from "./routes/form.js"; //Importanto o arquivo responsável pela rota do Formulário
import cors from "cors";
const app = Express();
const port = process.env.PORT || 3000;

//Configurações de BodyParser
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(cors()); //Liberando o acesso a API
app.use("/", formRouter); //Tornando a rota de Formulário acessível no servidor

//Iniciando o servidor
app.listen(port, () => console.log("Server is running on Port " + port));
