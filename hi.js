// let p2 = new Promise((res, rej) => {
//   let num = Math.random();
//   setTimeout(()=>{
//     if(num > 0.5){
//       res(num);
//     }else{
//       rej("The number is less than 0.5");
//     }
//   }, 2000);

// });

// console.log(p1);

// p1.then((data) => {
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// });

let p2 = fetch("https://jsonplaceholder.typicode.com/todos/1");

p2.then((data) => {
  console.log(data.length);
  console.log(data);
}).catch((err)=>{
  console.log(err);
});

console.log(p2);
