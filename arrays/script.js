'use strict';

function f(...v){
  console.log(...v);
}

const arr = [`a`, `b`, `c`, `d`, `e`, `f`];

// f(`The last element of arr is: ${arr.slice(-1)}`);

// const arrCopy = arr.slice(0);
// f(arrCopy);
// arrCopy.pop();
// f(arrCopy);
// f(arr);
//

// f(arr.splice(2, 3));
// f(arr);

// f(arr.reverse());
// f(arr);

// const newArr = [1, 2, 3, 4];
// 
// f(arr.concat(newArr));
// 
// f(newArr.join(" x ") , "=", "24");
// 
// f(arr);
// 
// f(arr[6]);
// f(arr.at(6))
// 
// f(arr.at(-2));
//

/* for of loop  */
// for (const x of arr){
//   f(x);
// }
// 
// /* forEach */
// arr.forEach((a, b, c) => {
//   for(let i = 0; i < 100; ++i){
//     f(i);
//     if(i == 50){
//       break;
//     }
//   }
// });


const mp = new Map([
  [1, `one`],
  [2, `two`],
  [3, `two`],
  [4, `two`],
  [5, `two`],
  [6, `two`],
]);

// mp.forEach((v, k, m) => {
//   f("Value: ", v, "-", "Key: ", k);
// });

const setobj = new Set(['a', 'b', 'c']);

setobj.forEach(f);
