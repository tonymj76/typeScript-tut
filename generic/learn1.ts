export interface PersonInfo {
    firstName: string;
    lastName: string;
}

export class AccountPerson implements PersonInfo {
    firstName!: string;
    lastName!: string;
    role!: number;
}

export class SupperUser implements PersonInfo {
    firstName!: string;
    lastName!: string;
    token!: string;
}

export class User {
    firstName!: string;
    lastName!: string;
    address!: string;
}
export class Building {
    address!: string;
    name!: string;
}

export const newAccountPerson: AccountPerson[] = [
    {firstName: "Anthony", lastName: "last name", role: 3},
    {firstName: "john", lastName: "janh name", role: 2},
    {firstName: "Job", lastName: "peace", role: 1},
    {firstName: "tony", lastName: "last name", role: 3},
]

const newSupperUser: SupperUser[]  = [
    {firstName: "tony", lastName: "last name", token: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", token: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", token: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", token: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", token: 'slslldkeddj'},
]

const newUser: User[] = [
    {firstName: "toy", lastName: "last name", address: 'slslldkeddj'},
    {firstName: "sdf", lastName: "last name", address: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", address: 'slslldkeddj'},
    {firstName: "tony", lastName: "last name", address: 'slslldkeddj'},
]

const newBuilding: Building[] = [
    {address: 'dldlldl', name: 'dlld'}
]
const getFullName = <T extends PersonInfo>(arg: T) => (`${arg.firstName} ${arg.lastName}`)

// function getFullName<T extends PersonInfo>(arg:T) {
//     return `${arg.firstName} ${arg.lastName}`
// }

// how to use the generic function

const superUserFullName = getFullName(newSupperUser[1])
const userFullName = getFullName<User>(newUser[1])

//this will error because the main property is missing
const build = getFullName(newBuilding[0])
