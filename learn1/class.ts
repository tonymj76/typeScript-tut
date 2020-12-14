class Department {
  // public name: string;
  // private id: string; even in extend classes
  // protected employee: string[]; will be avalible in the extend class

  //we can't assign to id because is read only type
  constructor(public name:string, private readonly id:number) {
    // this.name = n
  }
  static createEmployee(name: string){
    return {name}
  }
  describe(){
    console.log('Department: ' + this.id)
  }
  describe2(){
    console.log("Department: " + this.name)
  }
}

class ITDepartment extends Department {
  constructor(id:number) {
    super("IT", id)
  }
}

class AccountingDepartment extends Department {
  declare private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport(){
    if (this.lastReport){
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string){
    if(!value) throw new Error("Please add a value");
    this.addReport(value)
  }
  private constructor(id: number, private reports: string[]){
    super("Accounting Department", id);
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReport(){
    console.log(this.reports);
  }
  getInstance(){
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    AccountingDepartment.instance = new AccountingDepartment(8, [])
    return AccountingDepartment.instance
  }
}

//static file; access with the new keyword
console.log(Department.createEmployee("tony"))

const accounting = new Department('Accounting', 8)
// this refers to the object that calls it
const accountingCopy = {name: "Dummy", describe: accounting.describe2}
accountingCopy.describe() // output undefine because this refers to it obj

/* 
abstract class and method  abstract descrep(): void;
which means any class that inhert from the abstract class most implement the  abstract method, from the base class.

# Singletons private contructor
add private on the contructor
*/
