const CadastroLivro = require("../bookRegister.js");

describe("Initial tests", () =>{
    it("Cadastrar Diário de Um Banana", async () =>{
        const livro = await CadastroLivro.create ({ 
            nome: "Diário de Um Banana: Armageddon",
            exemplares: 3,
            autor: "Jeff Kinney",
            ano: 2026
        })
        expect(livro.nome).toBe("Cadastrar Diário de Um Banana"); 
        expect(livro.disponibilidade).toBe(true); 
    })
})