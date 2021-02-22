/* 
  Advance Typing concepts 
  Beyond the very basics

  ##Module Content##
  1) Intersection types
  2) Type Guards
  3) Discriminated Unions
  4) Type Casting
  5) Function overloads
  6) function chaining
  7) Unions with Comman Fields
*/

//custom type
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}
// this add the properties of admin and employee to ElevatedEmployee
type ElevatedEmployee = Admin & Employee; // **Intersection types combination **

type Cominable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // **Intersection types common types**
const el1:ElevatedEmployee = {
  name: 'mask',
  privileges: ['dns'],
  startDate: new Date()
}


//we could make use of interface but is a bit more code
interface Admins {
  name: string;
  privileges: string[3]
}
interface Employees {
  stateDate: Date
}
interface Empl extends Admins, Employees {};

function addition(a: number, b:number): number;
function addition(a: string, b:string): string;
function addition(a: string, b:number): string;
function addition(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string'){ // type guard
    return a.toString() + b.toString()
  }
  return a+b
}

console.log(addition(2,3))
console.log(addition('Max'," john").split(' '))

type UnknowEmployee = Employee | Admin;
function printEmployeeInformation(emp:UnknowEmployee) {
  console.log('Name: ' + emp.name)
  if ('privileges' in emp) console.log('Privileges: ', emp.privileges);
  if ('startDate' in emp) console.log('StateDate: ' + emp.startDate)
}

printEmployeeInformation(el1)
printEmployeeInformation({name: "hello", startDate: new Date()})

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo.... " + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2  = new Truck();

function useVahicle(vehicle:Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck){ //type guards
    vehicle.loadCargo(1000);
  }
}
useVahicle(v1);
useVahicle(v2);

interface Bird {
  type: 'bird'; //Discriminated Unions
  flyingSpeed: number;
}
interface Horse {
  type: 'horse'; //Discriminated Unions
  runningSpeed: number;
}

type Animal = Bird | Horse;
function moveAnimal (animal: Animal){
  let speed: number;
  switch (animal.type) {
    case 'bird':
       speed = animal.flyingSpeed;
      break;
  
    default:
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at Speed '+ speed);
}

moveAnimal({type: 'bird', flyingSpeed: 300})

const paragraph = document.querySelector('p')! as HTMLElement //type casting
paragraph.innerHTML = 'hi there!'
//OR

const userInputElement =<HTMLInputElement>document.querySelector("#input")! //type casting
userInputElement.value = "some value"

interface ErrorContainer {
  [prop: string]: string | number
}

const errorBag: ErrorContainer = {
  statusCode: 200,
  message: 'state'
}
console.log(errorBag);

const fetchedUserData = {
  id: '1',
  name: "max",
  job:{title: 'CEO', description: 'My own company'}
}
const usersInput = undefined;
const storedData = usersInput ?? 'Default'

console.log(fetchedUserData?.job?.title);

// understanding Unions
// if we have a value that is a union type we can only access members
// that are common to all types in the union

interface Hen {
  fly(): void;
  layEgg(): void;
}

interface Fish {
  swin: void;
  layEgg(): void;
}

// declare function getSmallPet(): Fish | Bird; or
let getSmallPet: () => Fish | Bird;

// Intersaction Types
// intersaction types combines multiple types into one

interface ErrorHandling {
  success: boolean;
  error?: {message: string}
}

interface ArtworksData {
  artworks: {title: string}[];
}

interface ArtistsData {
  artists: {name: string}[];
}

type ArtwordResponse = ArtworksData & ErrorHandling // this merge both interface together
type ArtistsResponse = ArtistsData & ErrorHandling

const handleArtWorkResponse = (response: ArtwordResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return;
  }
  console.log(response.artworks)
}

const handleArtistsResponse = (response: ArtistsResponse): {name: string}[] | void => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  return response.artists
}