import express from "express";
import dotenv from "dotenv";

const App = express();
const PORT = 3000;

App.get('/', (req , res) => {
    res.send("ALGUEM CHAMA O CAPITÃO");
})

App.listen(PORT, ()=>{
    console.log("Servidor conectado na porta: "+ PORT);
})