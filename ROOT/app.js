import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import CadastroLivro from "./CadastroLivro.js";

dotenv.config();

const App = express();
const PORT = 3000;

App.use(express.json());

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

App.post("/cadastro", async (req, res) => {
    try {
        const novoCadastroLivro = await CadastroLivro.create(req.body);
        res.json(novoCadastroLivro);
    }
    catch(error) {
        res.send(error)
    }
})

App.get('/', (req , res) => {
    res.send("ALGUEM CHAMA O CAPITÃO");
})

App.listen(PORT, ()=>{
    console.log("Servidor conectado na porta: "+ PORT);
})