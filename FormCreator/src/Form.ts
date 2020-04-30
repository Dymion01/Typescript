
import {Field} from './Field';
 export class Form {
    fields: Field[];
    form: HTMLElement;
    values: any[];
    comletedForm: HTMLElement;
    constructor(fields: Field[]) {
        this.form = <HTMLElement>document.createElement('form');
        this.fields = fields;
        for (let i = 0; i < fields.length; i++) {
            this.form.appendChild(fields[i].GetLabel());
            this.form.appendChild(fields[i].render());
        }
        let addInstOfFormBtn = <HTMLInputElement>document.createElement("input");
        addInstOfFormBtn.type = "button";
        addInstOfFormBtn.value = "Take the survey";
        addInstOfFormBtn.onclick = () => this.getValue();
        this.form.appendChild(addInstOfFormBtn);
    }
    render(): HTMLElement {
        return this.form;
    }
    getValue(): HTMLElement {
        this.comletedForm = <HTMLElement>document.createElement('div');
        this.comletedForm.classList.add("completedForm");
        for (let i = 0; i < this.fields.length; i++) {
            let p = <HTMLElement>document.createElement('p');
            p.classList.add("para");
            p.innerHTML = this.fields[i].label + ": " + this.fields[i].getValue();
            this.comletedForm.appendChild(p);
        }
        let completedFormDiv = document.getElementById("completedFormDiv");
        completedFormDiv.appendChild(this.comletedForm);
        return this.comletedForm;
    }
}
