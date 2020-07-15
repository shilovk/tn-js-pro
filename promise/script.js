'use strict';

const promise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(5), 1000);
});
promise1.then(value => console.log(value));

const promise2 = new CustomPromise((resolve, reject) => {
  setTimeout(() => reject(10), 1500);
});
promise2.then(null, value => console.log(value));

const promise3 = new CustomPromise((resolve, reject) => {
  setTimeout(() => reject(15), 2000);
});
promise3.catch(value => console.log(value));

const promise4 = CustomPromise.resolve(20);
console.log(promise4);

const promise5 = CustomPromise.reject(30);
console.log(promise5);
