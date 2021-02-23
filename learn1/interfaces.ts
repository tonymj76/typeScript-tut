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
  name?: string; //optional field
  numberOfStock(n: number): void;
}

class Inventory implements GetStock {
  name?: string; // optional property
  constructor(n?:string){ //optional parameter
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

interface HasEmail {
  type: "email";
  name: string;
  email: string;
}

interface HasPhoneNumber {
  type: "phone";
  name: string;
  phone: number;
}
type HasEmailOrNumber = HasEmail | HasPhoneNumber;
/* interface can also be used to describe call signatures
 NOTE the difference between how function type and interface 
 function type differs from one another... the function type decription
 using the arrow head => while the interface use a colon


 using just contact and message here is due to contextual inference 
 it also happens to callbacks once you describe the function you can just pass it as it is without implicitly declaring the types
*/
type AddFn = (a: number, b: number | string) => number
interface AddFns{
  (a:number, b: number | string): number
}

// more examples
interface ContactMessager1 {
  (contact: HasEmailOrNumber, message: string): void;
}

type ContactMessager2 = (
  contact: HasEmailOrNumber, message: string
  ) => void;

// NOTE we don't need type annotations for contact or message
const emailer: ContactMessager1 = (contact, message) => {
  console.log(contact.name);
  console.log(message)
}

const eamiler2: ContactMessager2 = (contact, message) => {
  console.log(contact.name);
  switch (contact.type) {
    case "email":
      console.log(contact.email)
      break;
    default:
      break;
  }
  console.log(message)
}

/**
 * (5) index signatures describe how a type will respond to property access
 */

/**
 * @example
 * {
 *    iPhone: { areaCode: 123, num: 4567890 },
 *    home:   { areaCode: 123, num: 8904567 },
 * }
 * 
 * this interface is saying when i index an object with a key i either get an undefined type or the object
 * note the undefined has to be present if not i will be trying to get a property or value or key which 
 * is never present but with undefined it will narrow it down for me
 */
interface PhoneNumberDict {
  //arr[0] or foo['myprop']
  [numberName: string]: 
  | undefined
  | {
    areaCode: number;
    num: number;
  }
}

// eg remove the undefined and try the following code
// without undefine we will not force a check but wit undefined we can

// const pn: PhoneNumberDict = {};
// pn.value

// //like this

// const pns : PhoneNumberDict = {};
// if (pns.value) {
//   pns.value
// }

// // this is also cool to look at
// const pnss : PhoneNumberDict = {};
// if (typeof pnss.value === "string") {
//   pnss.value
// }

//example
const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 5551212 },
  home: { areaCode: 321, num: 5550010 } // try editing me
};

// at most, a type may have one string and one number index signature

/**
 * (6) they may be used in combination with other types
 */

// // augment the existing PhoneNumberDict
// // i.e., imported it from a library, adding stuff to it
interface PhoneNumberDict {
  home: {
    /**
     * (7) interfaces are "open", meaning any declarations of the
     * -   same name are merged
     */
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}

// phoneDict.home;   // definitely present
// phoneDict.office; // definitely present
// phoneDict.mobile; // MAYBE present

/**
 * (7) Type aliases are initialized synchronously, so self-referential stuff is 👎
 */

// type NumberVal = 1 | 2 | 3 | NumberArr;
// type NumberArr = NumberVal[];
// interface NumArr extends Array<NumberVal> {}

/**
 * (8) Interfaces are initialized lazily, so combining it
 * -   w/ a type alias allows for recursive types!
 */

// type StringVal = "a" | "b" | "c" | StringArr;

// // type StringArr = StringVal[];
// interface StringArr {
//   // arr[0]
//   [k: number]: "a" | "b" | "c" | StringVal[];
// }

// const x: StringVal = Math.random() > 0.5 ? "b" : ["a"]; // ✅ ok!

export default {};