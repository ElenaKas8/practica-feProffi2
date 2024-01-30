axios
.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => {
  console.log(res);
})
.catch((err) => console.log(err));

//напиши код чтобы увидеть что в data
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => console.log(err));

  //тобы увидеть id 25 го елемента
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data[24].id);
  })
  .catch((err) => console.log(err))

//   напечатайте только те элементы,у которых id четное число

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].id % 2 === 0) {
        console.log(res.data[i]);
      }
    }
  })
