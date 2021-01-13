/*
  Generic in TypeScript
  generic is a type which is connected to another type which is flexible on how that type is computed

  generic give us flexibility and type support

  093 JS-Promises
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  098 Primitive-vs-Reference-Values
  https://academind.com/learn/javascript/reference-vs-primitive-values/

  100 Utility-Types-Docs
  https://www.typescriptlang.org/docs/handbook/utility-types.html
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

/*
  Here we are simply accept any type for T and B is not restricted
  to a type  
  function merge<T,B> (objA:T, objB: B) {
  return Object.assign(objA, objB)
}
calling this function with merge(3, 3) will work but it won't give out result because it will fail silently
*/

//Constraints in Generic
function merge<T extends object,B extends object> (objA:T, objB: B) {
  return Object.assign(objA, objB)
}


//How to use Generic and interface 
interface Lengthy {
  length: number
}
 
// This function can be use with any type that suppost length Attribute
function countAndDescribe<T extends Lengthy>(element:T) {
  let descript = element.length === 1 ? 'Got 1 element': (element.length >1 ? `Got ${element.length} elements.`: "Got no element")
  return [element, descript]
}
function extractKey<T extends object, U extends keyof T>(obj: T, key: U){
  return obj[key]
}

console.log(countAndDescribe(["kkdkd"]))

const holder = merge({name: "Max", boy: ['djd']}, {Age: 50});
console.log(holder)

//Generic Type in Class

class DataStorage<T extends string| number >{
  // using constraints here which takes in union of string & number
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item)
  }

  removeItem(item: T){
    if(this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(){
    return [...this.data]
  }
}

const myString = new DataStorage<string>();
myString.addItem('Hey')
console.log(myString.getItems());

//inbult Generics that are useful 

interface CourseGoal {
  title: string;
  description: string;
  completedDate: Date;
}

function giveCourseGoal(title: string, description: string, completedDate: Date){
  let courseGoal: Partial<CourseGoal> = {};
  //Partial helps to initial an empty value then give you the ability to assign value to it letter.
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completedDate = completedDate;

  return courseGoal;
  // return courseGoal as CourseGoal;
}

console.log(giveCourseGoal('typeScript', 'interesting course', new Date()))

const limitedPlan: Readonly<string[]> = ['plan1', 'plan2']
// limitedPlan.push(how) will error

//Generic and Union types explain