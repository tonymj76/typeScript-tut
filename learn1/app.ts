/*
  Generic in TypeScript
  generic is a type which is connected to another type which is flexible on how that type is computed
*/

const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done!")
  }, 2000);
})

promise.then( data => {
  data.split(" ")
})
