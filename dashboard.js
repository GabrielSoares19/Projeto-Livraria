// Exemplo de dados para simular integração com a API
const books = [
    { title: "Livro A", publisher: "Editora X", createdAt: "2024-01-01" },
    { title: "Livro B", publisher: "Editora Y", createdAt: "2024-01-10" },
    { title: "Livro C", publisher: "Editora X", createdAt: "2024-01-15" }
  ];
  
  // Preenche as estatísticas
  function loadStats() {
    const totalBooks = books.length;
    const publishers = books.map(book => book.publisher);
    const mostPopularPublisher = publishers.sort((a, b) =>
      publishers.filter(p => p === a).length - publishers.filter(p => p === b).length
    ).pop();
    const lastAdded = books[books.length - 1]?.title || "Nenhum";
  
    document.getElementById("total-books").textContent = totalBooks;
    document.getElementById("popular-publisher").textContent = mostPopularPublisher;
    document.getElementById("last-added").textContent = lastAdded;
  }
  
  // Navegação via atalhos
  function navigateTo(page) {
    window.location.href = page;
  }
  
  // Carrega estatísticas ao iniciar
  document.addEventListener("DOMContentLoaded", loadStats);
  