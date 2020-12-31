//Interfacings

// it describe the structure of an object will look like
// interface can't have a default value

/* 
interfaces can be use in a class,
we can impletments many interface in a class,
in interface we can't add private or public but we can 
add readonly to make it clear we can only read from this value.

we can implement inheritance in interfaces
we can extend more than one interface but we can't do that in a class
we can only inhert from one base class but we can implement more interfaces in a class

we use ? for optional property and method?()
*/
interface Named {
  readonly name: string;
  outputName?: string;// optional property
}
interface Person extends Named {
  age: number;
  greet(phrase: string): void;
}

// custom type of person
let user1: Person = {
  name: 'Max',
  age: 33,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
};
//NB we can use type
type SomeName = {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
}


interface GetStock {
  name?: string;
  numberOfStock(n: number): void;
}

class Inventory implements GetStock {
  name?: string;
  constructor(n?:string){
    if(n){
      this.name = n;
    }
  }
  get storeName(){
    return this.name
  };
  numberOfStock(n: number){
    console.log(n)
  };
}

const obj1 = new Inventory("tony store");
obj1.numberOfStock(7)
console.log(obj1.storeName)

let obj2: GetStock;

obj2 = new Inventory()
obj2.numberOfStock(8)


type AddFn = (a: number, b: number | string) => number
interface AddFns{
  (a:number, b: number | string): number
}