import {socket} from '../src/client'

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
        let completedFormDiv = document.getElementById("completedFormDiv");
        this.comletedForm.id = Date.now().toString();
        let deleteBtn = <HTMLElement>document.createElement('button');
        deleteBtn.innerHTML ="Remove"
        deleteBtn.onclick = () =>{
            
            let toRemove = document.getElementById(this.comletedForm.id);
            completedFormDiv.removeChild(toRemove);
            localStorage.removeItem(this.comletedForm.id);

        }
        this.comletedForm.appendChild(deleteBtn);

        for (let i = 0; i < this.fields.length; i++) {
            let p = <HTMLElement>document.createElement('p');
            p.classList.add("para");
            p.innerHTML = this.fields[i].label + ": " + this.fields[i].getValue();
            this.comletedForm.appendChild(p);
            
        }
        
        completedFormDiv.appendChild(this.comletedForm);

        socket.send(this.comletedForm.id +"&"+ JSON.stringify($(this.form).serializeArray()));
        localStorage.setItem(this.comletedForm.id , JSON.stringify($(this.form).serializeArray()));
        console.log(localStorage);
        return this.comletedForm;
    }
}
