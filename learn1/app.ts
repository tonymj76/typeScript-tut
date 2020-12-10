const how: string  = "tony"; // Not necessary because js infare types
declare let something: string; //most not be initialized
declare let h: unknown;
h = 3;
console.log(how)
console.log(h)

// Objects

const person: {
  name: string;
  age: number;
  role: [number, string]
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
  role: [3, "author"],
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