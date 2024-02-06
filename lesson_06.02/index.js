axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data);
    const app = document.getElementById("app");
    const ul = document.createElement("ul");
    const ul2 = document.createElement("ul");
    app.appendChild(ul);

    for (let i = 0; i < res.data.length; i++) {
      const li = document.createElement("li");

      li.textContent = res.data[i].title;
      li.addEventListener("click", () => {
        app.innerHTML = "";
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.textContent = `userId: ${res.data[i].userId} `;
        const h2 = document.createElement("h2");
        h2.textContent = `Id: ${res.data[i].id} `;
        const h3 = document.createElement("h3");
        h3.textContent = `Title: ${res.data[i].title} `;
        const p = document.createElement("p");
        p.textContent = `Body: ${res.data[i].body} `;
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(p);
        ul2.appendChild(li);
        app.appendChild(ul2);
      });

      ul.appendChild(li);
    }
  })
  .catch((err) => console.log(err));
