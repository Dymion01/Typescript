enum FieldType {
    inputBox = "text",
    textAreaBox = "textarea",
    dateBox = "date",
    emailBox = "email",
    selectBox = "select",
    checkbox  = "checkbox",
} 
// enum FieldType {
//     text = 1,
//     textarea,
//     date,
//     email,
//     select,
//     checkbox
// }

interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
    GetLabel(): HTMLElement;
}

class InputField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;


    constructor(name:string, label:string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.inputBox;
        this.element.name =this.name;
        this.element.type = this.type;
        
        
    }   
    GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }

}

class TextAreaField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLTextAreaElement;


    constructor(name:string, label:string) {
        this.element = <HTMLTextAreaElement>document.createElement('textarea');
        this.name = name;
        this.label = label;
        this.element.name =this.name;
        
    }
    GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }

}

class DateField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;


    constructor(name:string, label:string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.dateBox;
        this.element.name =this.name;
        this.element.type = this.type;

    }
    GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }

}

class EmailField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;


    constructor(name:string, label:string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type= FieldType.emailBox;
        this.element.name =this.name;
        this.element.type = this.type;

    }
     GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }

}

class SelectField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLSelectElement;


    constructor(name:string, label:string , arr:string[]) {
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.type= FieldType.selectBox;
        this.element.name =this.name;
        for(let i=0; i <arr.length ;i++ ){
            let option = <HTMLElement>document.createElement('option');
            option.setAttribute("value" , arr[i]);
            option.innerHTML = arr[i];
            this.element.appendChild(option);
        }

    }
    GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value
    }

}
class CheckboxField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;


    constructor(name:string, label:string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name =this.name;
        this.type =FieldType.checkbox;
        this.element.type = this.type;

    }
    GetLabel() : HTMLElement{
        let labelElement: HTMLElement;
        labelElement = <HTMLElement> document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML =this.label;
        return  labelElement;
    }

    render(): HTMLElement {
        return this.element;
        
    }
    getValue(): any {
        return this.element.checked;
    }

}

class Form {
    fields: Field[];
    form: HTMLElement;
    values: any[];
    comletedForm : HTMLElement;
    constructor(fields :Field[]){
        this.form = <HTMLElement>document.createElement('form');
        this.fields= fields;
        for(let i =0 ; i<fields.length ; i++){

            this.form.appendChild(fields[i].GetLabel());
            this.form.appendChild(fields[i].render());
        }
        
    }
    render() :HTMLElement{
        return this.form;
    }
    getValue(): HTMLElement {
        this.comletedForm = <HTMLElement>document.createElement('div');
        this.comletedForm.classList.add("completedForm");

        for(let i =0 ; i<this.fields.length ; i++){
        // this.values.push( this.fields[i].getValue());
        // console.log(this.fields[i].getValue());
        let p = <HTMLElement>document.createElement('p');
        p.classList.add("para");
        p.innerHTML= this.fields[i].label + ": " + this.fields[i].getValue();
        this.comletedForm.appendChild(p);
        }

        return this.comletedForm;
    }
}



var names:string[] = new Array("Mary","Tom","Jack","Jill")  
let s = new EmailField("email" , "Email" );
let d = new InputField("input", "Input") ;
let xd = new SelectField("select" , "Select" , names ) as Field;
let dq = new CheckboxField("checkbox", "Checkbox") ;
let saaa = new DateField("date" , "Data" );
let deee = new TextAreaField("textArea", "TextArea") ;
var testfields : Field[] = new Array(s,d,xd, dq ,saaa ,deee);
let x = document.getElementById("test");
let testForm = new Form(testfields);
// x.appendChild(saaa.GetLabel() );
// x.appendChild(saaa.render());
x.appendChild(testForm.render());


let completedFormDiv = document.getElementById("completedFormDiv");
function TestLog(){
   completedFormDiv.appendChild( testForm.getValue());
}