import mongoose from "mongoose";

const CadastroLivroSchema = new mongoose.Schema({
    nome: String,
    exemplares: Number,
});

export default mongoose.model("CadastroLivro", CadastroLivroSchema);