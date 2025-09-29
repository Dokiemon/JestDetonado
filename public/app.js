import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import BookService from "./services/bookServices.js";
import { fileURLToPath } from "url"; // Necessário para usar __dirname com ES Modules
import path from "path"; // Necessário para usar __dirname com ES Modules
import exeCadastro from "./cadastro.js"
//import CadastroLivro from "./services/bookServices.js";

dotenv.config();

const bookService = new BookService();
const App = express();
const PORT = 3000;
//const fileURLToPath = import("url").fileURLToPath;
const __filename = fileURLToPath(import.meta.url); //o meta.url serve para pegar o caminho do arquivo atual
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

App.post("/register",async(req,res)=>{
    try{
        const newUser=await exeCadastro.create(req.body);
        res.json(newUser);
    }
    catch(error){
        res.status(500).json({msg:"Erro ao cadastrar usuário"});
    }
})

App.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html");
})

App.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/cadastro.html");
})

App.post('/cadastro', async (req, res) => {
    const novoLivro = await bookService.bookAdd(req.body.nome, req.body.exemplares, req.body.autor, req.body.ano);
    res.json(novoLivro);
    console.log(novoLivro);
    const hadouken = await bookService.bookListing(novoLivro);
    console.log(hadouken);
    console.log("Se fudeu");
})

App.get('/', (req , res) => {
    res.send("ALGUEM CHAMA O CAPITÃO");
})

App.listen(PORT, ()=>{
    console.log("Servidor conectado na porta: "+ PORT);
})