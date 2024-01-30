// let promise = new Promise((resolve, reject) =>
// resolve("siccessful")
// );
// promise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
    

    //мы запрашиваем какоето число и надо вывести на экране квадрат этого числа
    // let promise1 = new Promise((resolve, reject) =>
    // resolve(5)
    // );
    // promise1
    // .then((result) => console.log(result * result))
    // .catch((error) => console.log(error));
    
    //есть 2 проммиса,один возвра щает одно число,второй другое.напишите функцию,которая возвращает сумму двух чисел
    let promise2 = new Promise((resolve, reject) =>
    resolve(5)
    );
    let promise3 = new Promise((resolve, reject) =>
    resolve(10)
    );
    let promise4= new Promise((resolve, reject) =>
    resolve(15)
    );
    promise2
    .then((result) => promise3
    .then((result2) => promise4
    .then((result3) => console.log(result + result2 + result3))))
    .catch((error) => console.log(error));
    

  