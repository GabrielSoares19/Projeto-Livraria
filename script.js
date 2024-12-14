// script.js
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Obter valores do formulário
  const id = document.getElementById("id").value;
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const state = document.getElementById("state").value;
  const pages = document.getElementById("pages").value;
  const publisher = document.getElementById("publisher").value;

  // Criar elemento de lista para o livro
  const bookItem = document.createElement("li");
  bookItem.setAttribute("data-id", id);  // Atribuir um ID ao item da lista

  bookItem.innerHTML = `
    <strong>${title}</strong> por ${author}<br>
    Ano: ${year} | Estado: ${state} | Páginas: ${pages} | Editora: ${publisher} <br>
    <small>ID: ${id}</small>
    <button class="edit-btn">Editar</button>
    <button class="delete-btn">Excluir</button>
  `;

  // Adicionar à lista de livros
  document.getElementById("books").appendChild(bookItem);

  // Limpar formulário
  this.reset();
});

// Manipular os botões de edição e exclusão
document.getElementById("books").addEventListener("click", function (e) {
  const bookItem = e.target.closest("li");

  // Excluir livro
  if (e.target.classList.contains("delete-btn")) {
    if (bookItem) {
      bookItem.remove();  // Remover o item da lista
    }
  }

  // Editar livro
  if (e.target.classList.contains("edit-btn")) {
    if (bookItem) {
      const id = bookItem.querySelector("small").textContent.split(": ")[1];
      const title = bookItem.querySelector("strong").textContent;
      const author = bookItem.querySelector("strong").nextSibling.textContent.trim().slice(3);
      const year = bookItem.querySelector("br").nextSibling.textContent.split(" | ")[0].slice(5);
      const state = bookItem.querySelector("br").nextSibling.textContent.split(" | ")[1].slice(7);
      const pages = bookItem.querySelector("br").nextSibling.textContent.split(" | ")[2].slice(9);
      const publisher = bookItem.querySelector("br").nextSibling.textContent.split(" | ")[3].slice(10);

      // Preencher os campos do formulário com os dados do livro para edição
      document.getElementById("id").value = id;
      document.getElementById("title").value = title;
      document.getElementById("author").value = author;
      document.getElementById("year").value = year;
      document.getElementById("state").value = state;
      document.getElementById("pages").value = pages;
      document.getElementById("publisher").value = publisher;

      // Alterar o botão de envio para "Atualizar Livro"
      document.querySelector("button[type='submit']").textContent = "Atualizar Livro";
    }
  }
});
