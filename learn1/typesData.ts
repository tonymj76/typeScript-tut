const how: string  = "tony"; // Not necessary because type inference
declare let something: string; //most not be initialized
declare let h: unknown;
h = 3;
console.log(how)
console.log(h)

// Objects

const person: {
  name: string;
  age: number;
  role: [number, string] //tuple
} = {
  name: "jdjd",
  age: 30,
  role: [3, 'thid']
}

// is the same as this below and better
const persons = {
  name: "jdjd",
  age: 30,
  hobbies: ['dkd', 'sport', 'chess'], //Array
  role: [3, "author"], //tuple
  post: 0,
}
for (const hobby of persons.hobbies){
  console.log(hobby, ">>>>")
}
person.role.push('hee')
person.role.push(3);
console.log(person.role)

//enum

enum Hello {
  ADMIN = 1,
  SUPERADMIN
}
persons.post = Hello.SUPERADMIN
console.log(persons)
console.log(Hello.ADMIN)

//Any types--> store any value
declare let favoriteActivities: string[];
favoriteActivities = ['sport', 'something']
declare let anyStuff: any[];
anyStuff = [3, favoriteActivities, "favor"]

/* How to add two different data type
--> union types

*/

// function combine(input1: number | string, input2: number| string ){
//   return input1 + input2
// }

//Alias eg note type is just for typescript not js
type Combinable = number | string;
type ConversionDescriptorLiteral = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2
  }
  return input1.toString() + input2.toString()
}