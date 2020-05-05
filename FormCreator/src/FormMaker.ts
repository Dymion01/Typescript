import {Form} from './Form';
import {InputField} from './InputField';
import {EmailField} from './EmailField';
import {SelectField} from './SelectField';
import {TextAreaField} from './TextAreaField';
import {DateField} from './DateField';
import {CheckboxField} from './CheckboxField';
 export class FormMaker {
    makerChooseElem: HTMLSelectElement;
    makerElemName: HTMLInputElement;
    MakerElemLabel: HTMLInputElement;
    formMaker: HTMLElement;
    arr = ["InputField", "EmailField", "SelectField", "CheckboxField", "DateField", "TextAreaField"];
    formFields = [];
    makerSelectOptionsInput: HTMLInputElement;
    formSelectArray: string[];
    form: Form;
    constructor() {
        this.formMaker = <HTMLElement>document.createElement('form');
        this.formMaker.classList.add('formMaker');
        let makerText = <HTMLElement>document.createElement('p');
        makerText.innerHTML = " Choose and make element of Form ";
        this.makerChooseElem = <HTMLSelectElement>document.createElement('select');
        for (let i = 0; i < this.arr.length; i++) {
            let option = <HTMLElement>document.createElement('option');
            option.setAttribute("value", this.arr[i]);
            option.innerHTML = this.arr[i];
            this.makerChooseElem.appendChild(option);
        }
        this.makerChooseElem.addEventListener("change", () => this.AddSelectOptions());
        this.makerElemName = <HTMLInputElement>document.createElement('input');
        this.makerElemName.setAttribute("placeholder", "Name");
        this.MakerElemLabel = <HTMLInputElement>document.createElement('input');
        this.MakerElemLabel.setAttribute("placeholder", "Label");
        this.formMaker.appendChild(makerText);
        this.formMaker.appendChild(this.makerChooseElem);
        this.formMaker.appendChild(this.makerElemName);
        this.formMaker.appendChild(this.MakerElemLabel);
        let makerButton = <HTMLInputElement>document.createElement('input');
        makerButton.type = "button";
        makerButton.value = "Ddd to form";
        makerButton.onclick = () => this.AddElem();
        this.formMaker.appendChild(makerButton);
        let MakeFormButton = <HTMLInputElement>document.createElement("input");
        MakeFormButton.type = "button";
        MakeFormButton.value = "Make a form!";
        MakeFormButton.onclick = () => this.MakeForm();
        this.formMaker.appendChild(MakeFormButton);
    }
    AddSelectOptions() {
        console.log(this.makerChooseElem.value);
        if (this.makerChooseElem.value == "SelectField") {
            this.makerSelectOptionsInput = <HTMLInputElement>document.createElement("input");
            this.makerSelectOptionsInput.setAttribute("placeholder", "Select Options ");
            // this.formMaker.appendChild(this.makerSelectOptionsInput);
            this.formMaker.insertBefore(this.makerSelectOptionsInput , this.MakerElemLabel.nextSibling);
        }
        else
            this.formMaker.removeChild(this.makerSelectOptionsInput);
    }
    AddElem() {
        console.log(this);
        switch (this.makerChooseElem.value) {
            case "InputField":
                let input = new InputField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(input);
                break;
            case "EmailField":
                let email = new EmailField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(email);
                break;
            case "CheckboxField":
                let checkbox = new CheckboxField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(checkbox);
                break;
            case "DateField":
                let date = new DateField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(date);
                break;
            case "TextAreaField":
                let textarea = new TextAreaField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(textarea);
                break;
            case "SelectField":
                this.formSelectArray = this.makerSelectOptionsInput.value.split(", ");
                let select = new SelectField(this.makerElemName.value, this.MakerElemLabel.value, this.formSelectArray);
                this.formFields.push(select);
        }
    }
    GetMaker() {
        return this.formMaker;
    }
    MakeForm() {
        let x = document.getElementById("test");
        this.form = new Form(this.formFields);
        x.appendChild(this.form.render());
    }
}
