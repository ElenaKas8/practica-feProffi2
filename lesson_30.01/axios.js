// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => console.log(err));

// //напиши код чтобы увидеть что в data
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.log(err));

//   //тобы увидеть id 25 го елемента
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res.data[24].id);
//   })
//   .catch((err) => console.log(err))

// //   напечатайте только те элементы,у которых id четное число

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     for (let i = 0; i < res.data.length; i++) {
//       if (res.data[i].id % 2 === 0) {
//         console.log(res.data[i]);
//       }
//     }
//   })


// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res.data);
//     const app = document.getElementById("app");
//     const ul = document.createElement("ul");
//     app.appendChild(ul);
//     for (let i = 0; i < res.data.length; i++) {
//       const li = document.createElement("li");
//       li.innerHTML = res.data[i].title;
//       ul.appendChild(li);
//     }
//   })
//   .catch((err) => console.log(err));

  //напечатать на экране title

  // axios
  // .get("https://jsonplaceholder.typicode.com/posts")
  // .then((res) => {
  //   console.log(res.data[0].title);
  //   const app = document.getElementById("app");
  //   const div = document.createElement("div");
  //   div.textContent = res.data[0].title;
  //   app.appendChild(div);
  // })
  // .catch((err) => console.log(err));

  //непечатать все елементы items

  // axios
  // .get("https://jsonplaceholder.typicode.com/posts")
  // .then((res) => {
  //   console.log(res.data);
  //   const app = document.getElementById("app");
  //   const ul = document.createElement("ul");
  //   app.appendChild(ul);
  //   for (let i = 0; i < res.data.length; i++) {
  //     const li = document.createElement("li");
  //     li.innerHTML = res.data[i].title;
  //     ul.appendChild(li);
  //   }
  // })

  //вывести на экран как массив объектов

  axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data);
    const app = document.getElementById("app");
    const ul = document.createElement("ul");
    app.appendChild(ul);

    for (let i = 0; i < res.data.length; i++) {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      h1.textContent = `userId: ${res.data[i].userId}`;
      h2.textContent = `Id: ${res.data[i].id}`;
      h3.textContent = `Id: ${res.data[i].title}`;
      p.textContent = `Id: ${res.data[i].body}`;
      li.appendChild(h1);
      li.appendChild(h2);
      li.appendChild(h3);
      li.appendChild(p);
      li.style.margin = "100px 0";
      ul.appendChild(li);
    }
  })
  .catch((err) => console.log(err));
  