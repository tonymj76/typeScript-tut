//Interfacings

// it describe the structure of an object will look like
// interface can't have a default value
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
// interface person as a type
let user1: Person = {
  name: 'Max',
  age: 33,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
};