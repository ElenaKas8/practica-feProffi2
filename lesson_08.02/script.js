
// let x;

// function square(val) {
//   setTimeout(() => {   
//     x = val ** 2;
//     return val ** 2;
//   }, 500);
// }
//   square(5);
//   setTimeout(() => {
//       console.log(x);
//   },500)

//callback


// function square(val, callback) {
//     setTimeout(() => {
//       callback(val ** 2);
//     }, 500);
//   }
  
// //   const func = (arg) => {
// //     console.log(arg);
// //   };
  
//   square(5, (func) => console.log(func));

//   переделать этот кол,чтобы функция возвращала сумму 2 ух чисел

  function add(val1,val2,callback) {
    setTimeout(() => {
      callback(val1+val2);
    }, 500);
  }
  add(5,8, (func) => console.log(func))  