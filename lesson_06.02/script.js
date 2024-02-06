// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res.data);
//     const app = document.getElementById("app");
//     const ul = document.createElement("ul");
//     app.appendChild(ul);
//     for (let i = 0; i < res.data.length; i++) {
//       const li = document.createElement("li");
//       const h1 = document.createElement("h1");
//       h1.textContent = `userId: ${res.data[i].userId} `;
//       const h2 = document.createElement("h2");
//       h2.textContent = `Id: ${res.data[i].id} `;
//       const h3 = document.createElement("h3");
//       h3.textContent = `Title: ${res.data[i].title} `;
//       const p = document.createElement("p");
//       const a = document.createElement("a");
//       a.textContent = "Go to google";
//       p.textContent = `Body: ${res.data[i].body} `;
//       li.appendChild(h1);
//       li.appendChild(h2);
//       li.appendChild(h3);
//       li.appendChild(p);
//       ul.appendChild(li);
//     }
//   })
//   .catch((err) => console.log(err));


  //напишите код -когда кликаем на title-переходим в google


//   for (let i = 0; i < res.data.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = res.data[i].title;
//     li.addEventListener("click", () => {
//       window.location.href = <a>("https://google.com")</a>;
//       href = "https://google.com";
//     });
//     ul.appendChild(li);
//   }


//напишите код когда при клике на линк,мы открываем объект по id элемента
 

https://jsonplaceholder.typicode.com/posts

for (let i = 0; i < res.data.length; i++) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = res.data[i].title;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `https://jsonplaceholder.typicode.com/posts/${
        i + 1
      }`;
    });
    li.appendChild(link);
    ul.appendChild(li);
  }