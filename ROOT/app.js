import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const App = express();
const PORT = 3000;

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

App.get('/', (req , res) => {
    res.send("ALGUEM CHAMA O CAPITÃO");
})

App.listen(PORT, ()=>{
    console.log("Servidor conectado na porta: "+ PORT);
})