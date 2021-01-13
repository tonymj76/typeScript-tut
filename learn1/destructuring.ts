const addz = (a: number, b: number) => a+b;

//Declaration of function
const printableNumber: (a: number | string) => void = v => console.log(v)

// Execution of the function
printableNumber(addz(3,4))

const b = document.querySelector('button')!;
b.addEventListener("click", event => console.log(event))

let composite: (...agrs: number[]) => number;
const many = (...args: number[]) => args.reduce((c, p) => c+p)
const many2: (...args: number[]) => number = (...d) => d.reduce((c, p)=> c+p)

composite = many2
printableNumber(composite(3,4,3,2,5))
