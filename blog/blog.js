const titleEl = document.querySelector("h2");
const textEl = document.querySelector("p");

async function renderPost() {
  const id = localStorage.getItem("postId");
  console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  titleEl.textContent = data.title;
  textEl.textContent = data.body;
}

renderPost();
