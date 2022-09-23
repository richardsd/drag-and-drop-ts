/// <reference path="base-component.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../decorators/autobind.ts" />

namespace App {
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;
    
        constructor() {
            super('project-input', 'app', true, 'user-input');
    
            // store the input elements
            this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;
    
            this.configure();
        }
    
        public renderContent(): void {}
    
        public configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
    
        private gatherUserInput(): [string, string, number] | void {
            const titleInput = this.titleInputElement.value;
            const descriptionInput = this.descriptionInputElement.value;
            const peopleInput = this.peopleInputElement.value;
    
            const titleValidatable: Validatable = { value: titleInput, required: true };
            const descriptionValidatable: Validatable = { value: descriptionInput, required: true, minLength: 5 };
            const peopleValidatable: Validatable = { value: peopleInput, required: true, max: 5 }
    
            if (!validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)) {
                alert('Invalid input, please try again!');
            } else {
                return [titleInput, descriptionInput, +peopleInput];
            }
        }
    
        private clearInputs(): void {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
    
        // @AutoBind() // - alternative approach
        @autobind
        private submitHandler(event: Event) {
            event.preventDefault();
    
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, description, people] = userInput;
                projectState.addProject(title, description, people);
            }
            this.clearInputs();
        }
    }
}