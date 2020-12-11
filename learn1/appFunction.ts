function adds(n1: number, n2: number) {
  return n1 + n2
}

//this function return void because it don't return any value
function printResult(num: number): void{
  console.log('Result: ' + num);
}

printResult(adds(3,5))

//function types are types that decribes a function
let combineValus: (a: number, b: number) => number;

combineValus = add;
// combineValus = printResult; errored


function addAndHandle(n1:number, n2: number, cb: (num: number) => void) {
  cb(n1+n2);
};

addAndHandle(10, 20, (result) =>{console.log(result)})