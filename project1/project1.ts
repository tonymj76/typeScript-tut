class Project {
  templateElInput: HTMLTemplateElement;
  divElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor(){
    this.templateElInput = document.getElementById('project-input')! as HTMLTemplateElement;
    this.divElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElInput.content, true
    )
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach(){
    this.divElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const newProject = new Project()