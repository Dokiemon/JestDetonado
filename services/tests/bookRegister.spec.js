import CadastroLivro from "../bookRegister.js";

test("Livro novo deve ter disponibilidade true", async () => {
  const livro = new CadastroLivro({
    nome: "O Hobbit",
    exemplares: 5,
    autor: "Tolkien",
    ano: 1937
  });

  expect(livro.disponibilidade).toBe(true);
});