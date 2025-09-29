async function carregarLivros() {
    async function carregarLivros() {
        const response = await fetch('/biblioteca', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        let livros = [];
        try {
            // Tenta ler como JSON, se falhar, mantém array vazio
            console.log("Tentando ler resposta como JSON...");
            livros = await response.json();
        } catch (e) {
            livros = [];
            console.error("Erro ao ler a resposta como JSON:", e);
        }
        const livrosContainer = document.getElementById('livrosContainer');
        livrosContainer.innerHTML = '';
        livros.forEach(livro => {
            const livroDiv = document.createElement('div');
            livroDiv.textContent = `Título: ${livro.nome}, Autor: ${livro.autor}, Ano: ${livro.ano}, Exemplares: ${livro.exemplares}`;
            livrosContainer.appendChild(livroDiv);
        });
    }

    window.onload = carregarLivros;
}

// Chame a função quando a página carregar
window.onload = carregarLivros;