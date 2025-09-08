import mongoose from "mongoose";
import CadastroLivro from "../bookRegister.js";

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
});

describe("Initial tests", () =>{
    it("Cadastrar Diário de Um Banana", async () =>{
        const livro = await CadastroLivro.create ({ 
            nome: "Diário de Um Banana: Armageddon",
            exemplares: 3,
            autor: "Jeff Kinney",
            ano: 2026
        })
        expect(livro.nome).toBe("Diário de Um Banana: Armageddon"); 
        expect(livro.disponibilidade).toBe(true); 
    })
})