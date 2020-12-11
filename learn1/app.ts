// unknow type

let userInput: unknown;
let userName : string;

userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
  userName = userInput;
}

//Never type

function generateError(message: string, code: number): never {
  throw {message, code};
  // note throw always end our script remedy is to use try and catch
  // while(true) {} --> never return a value
}

// generateError("An error occured!", 500)

const btn = document.querySelector("button")!;

function clickHandler(message: string){
  console.log("hello " + message)
}

btn.addEventListener('click', clickHandler.bind(null, "John"));