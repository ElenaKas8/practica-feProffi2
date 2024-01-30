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


axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data);
    const app = document.getElementById("app");
    const ul = document.createElement("ul");
    app.appendChild(ul);
    for (let i = 0; i < res.data.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = res.data[i].title;
      ul.appendChild(li);
    }
  })
  .catch((err) => console.log(err));