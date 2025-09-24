import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url"; // Necessário para usar __dirname com ES Modules
import path from "path"; // Necessário para usar __dirname com ES Modules
//import CadastroLivro from "./services/bookServices.js";

dotenv.config();

const App = express();
const PORT = 3000;
//const fileURLToPath = import("url").fileURLToPath;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Necessário para usar __dirname com ES Modules porque __dirname não funciona nativamente com ES Modules

App.use(express.json()); //middleware para ler JSON
App.use(express.static(__dirname)); //middleware para ler os dados do forms

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Banco conectado");
    }
    catch (error){
        console.log(error);
    }
}

connectDB();

// App.post("/cadastro", async (req, res) => { 
//     try {
//         const novoCadastroLivro = await CadastroLivro.create(req.body);
//         res.json(novoCadastroLivro);
//     }
//     catch(error) {
//         res.send(error)
//     }
// })

App.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html");
})

App.get('/', (req , res) => {
    res.send("ALGUEM CHAMA O CAPITÃO");
})

App.listen(PORT, ()=>{
    console.log("Servidor conectado na porta: "+ PORT);
})