import { HasEmail, HasPhoneNumber } from "./interfaces";
// using parameter properties
// interface HasEmail {
//   name: string;
//   email: string;
// }

export class Contact implements HasEmail {
  // using paremeter properties
  constructor(public name: string, public email: string ="no email"){// nothing needed
  }
}

/* Note this issue
* when you have a field that needs to implemented when a condition is true
*
*/

class OtherContact implements HasEmail, HasPhoneNumber {
  protected age = 0;
  private password: string | undefined //we add undefined because we need to set password later or
  // private password!: string; // do this only when you are very sure that the password will definatle have a value immediately after contructor runs
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ){
    this.password = Math.round(Math.random() * 1e14).toString(32);
  }
}

/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 * note Abstract classes can't be initiated on their own
 */

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
  public abstract phone: number; // must be implemented by non-abstract subclasses

  constructor(
    public name: string,
    public email: string // must be public to satisfy HasEmail
  ) {}

  abstract sendEmail(): void; // must be implemented by non-abstract subclasses
}

/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
class ConcreteContact extends AbstractContact {
  constructor(
    public phone: number, // must happen before non property-parameter arguments
    name: string,
    email: string
  ) {
    super(name, email);
  }
  sendEmail() {
    // mandatory!
    console.log("sending an email");
  }
}
