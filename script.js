const container = document.querySelector("div");

async function renderData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  for (let post of data) {
    container.innerHTML += `
        <a style="background-color: red; cursor: pointer;" onclick="handleRoute(${post.id})">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </a>
    `;
  }
}

function handleRoute(id) {
  localStorage.setItem("postId", id);
  window.location.href = "/blog/blog.html";
}

renderData();
