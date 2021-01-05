/* 
  Decorators--> Meta-Programming
  when using multiple Decorators the order in which it execute is
  from bottom up eg the first shall be the last. 

  from my example the function call is called in other as you
  execute it but the decorators function works as descrip above

  for accessor --> target: any propertyName: string or Syn
  target name descriptor(PropertyDescriptor) for methods

  properties --> target: any; propName: string: 

  parameter --> target, name, position

112 More-on-Property-Descriptors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

class-validator --> a package that helps you validate your class

we can also have return statement in decorators which will run when
we initiated the class or when we call the method...Note not all Decorators can have a return statement, method and class decorators can have return statement which won't be ignore by the javascript framework.
*/

function Logger(name:string) {
  return (constructor: Function) => {
    console.log(constructor);
    console.log(name);
  }
}

function AddAttribute(template: string, tagId: string){
  return (_: Function) => {
    const appId = document.getElementById(tagId)! as HTMLElement
    appId.innerHTML = template
  }
}


@Logger("Person log msg")
@AddAttribute(`<h1>Hello Tony this is decorators</h1>`, 'app')
class Person{
  name = "my person name"
  constructor(){
    console.log("create an object of Person...")
  }
}

const Mike = new Person()
console.log(Mike.name);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
}

function PositiveNumber(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) return true;
  let isValid = true;
  for (const prop in objValidatorConfig){
    for(const validate of objValidatorConfig[prop]){
      switch(validate){
        case 'required':
          isValid = isValid && !!obj[prop] // change the output to boolean
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number){
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; //convert it to number
  const course = new Course(title, price);
  console.log(validate(course))
  if(!validate(course)){
    alert("Invalid input, please try again!");
    return;
  }
  console.log(course)
})