//validation
interface Validatable {
  value: number | string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
}

function validateF(validatableInput:Validatable) {
  let isValid = true;
  if (validatableInput.required){
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.trim().length > validatableInput.minLength
  }
  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.trim().length < validatableInput.maxLength
  }
  return isValid;
}
//autobind decorator
function autoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get(){
      return originalMethod.bind(this);
    }
  }
  return adjustedDescriptor;
}
class Project {
  templateElInput: HTMLTemplateElement;
  divElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionElement: HTMLTextAreaElement;
  noPeopleElement: HTMLInputElement;

  constructor(){
    this.templateElInput = document.getElementById('project-input')! as HTMLTemplateElement;
    this.divElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElInput.content, true
    )
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionElement = this.element.querySelector('#description')! as HTMLTextAreaElement;
    this.noPeopleElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.configure()
  }

  private attach(){
    this.divElement.insertAdjacentElement('afterbegin', this.element)
  }
  private configure(){
    this.element?.addEventListener('submit', this.submitHandler);
  }

  @autoBind
  private submitHandler(e: Event){
    e.preventDefault();
    const userValue = this.getFormsValue();
    if (Array.isArray(userValue)){
      console.log(userValue)
    }
    this.element.reset();
  }

  private getFormsValue(): [string, string, number] | void {
      const title = this.titleInputElement.value;
      const description = this.descriptionElement.value;
      const people = +this.noPeopleElement.value;
      //set validation here before you return it
      const validateTitle: Validatable = {
        value: title,
        required: true,
      };
      const validateDescription: Validatable = {
        value: description,
        required: true,
        minLength: 4
      };
      const validatePeople: Validatable = {
        value: people,
        required: true,
      }
      if (!validateF(validateTitle)|| 
        !validateF(validateDescription) ||
        !validateF(validatePeople)){
          alert("some field are required")
          return;
        }
      return [title, description, people]
  };
}

class ProjectList {
  templateElInput: HTMLTemplateElement;
  divElement: HTMLDivElement;
  element: HTMLElement;
  constructor(private type: 'active' | 'finished'){
    this.templateElInput = document.getElementById('project-list')! as HTMLTemplateElement;
    this.divElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElInput.content, true
    )
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;
    this.attach();
    this.renderContent();
   }
   private renderContent(){
     const listId = `${this.type}-projects-list`;
     this.element.querySelector('ul')!.id = listId;
     this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
   };
   private attach(){
     this.divElement.insertAdjacentElement('beforeend', this.element);
   }
}
const newProject = new Project()
const newProjectList = new ProjectList('active')
