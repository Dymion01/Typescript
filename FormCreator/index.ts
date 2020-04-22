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
        // let makerButton = <HTMLElement>document.createElement('button')
        //  makerButton.addEventListener( "click", this.getValue);
        //  this.form.appendChild(makerButton);
        
    }
    render() :HTMLElement{
        return this.form;
    }
    getValue(): HTMLElement {
        this.comletedForm = <HTMLElement>document.createElement('div');
        this.comletedForm.classList.add("completedForm");

        for(let i =0 ; i<this.fields.length ; i++){
        let p = <HTMLElement>document.createElement('p');
        p.classList.add("para");
        p.innerHTML= this.fields[i].label + ": " + this.fields[i].getValue();
        this.comletedForm.appendChild(p);
        }

        return this.comletedForm;
    }
}

class FormMaker{

     makerChooseElem :HTMLSelectElement;
     makerElemName: HTMLInputElement;
     MakerElemLabel:HTMLInputElement;
     formMaker :HTMLElement;
     arr = ["InputField" , "EmailField" , "SelectField" , "CheckboxField" , "DateField" , "TextAreaField"];
     formFields = [];
     makerSelectOptionsInput:HTMLInputElement;
     formSelectArray: string[];
     form :Form;
    constructor(){
        this.formMaker = <HTMLElement>document.createElement('form');
        this.formMaker.classList.add('formMaker');

        let makerText = <HTMLElement>document.createElement('p');
        makerText.innerHTML = " Choose and make element of Form ";
        this.makerChooseElem = <HTMLSelectElement>document.createElement('select');
        
        for(let i=0; i <this.arr.length ;i++ ){
            let option = <HTMLElement>document.createElement('option');
            option.setAttribute("value" , this.arr[i]);
            option.innerHTML = this.arr[i];
            this.makerChooseElem.appendChild(option);
        }
        this.makerChooseElem.addEventListener("change" , () => this.AddSelectOptions());
        
        this.makerElemName =  <HTMLInputElement>document.createElement('input');
        this.makerElemName.setAttribute("placeholder" , "Name");
        this.MakerElemLabel =  <HTMLInputElement>document.createElement('input');
        this.MakerElemLabel.setAttribute("placeholder" , "Label");
        this.formMaker.appendChild(makerText);
        this.formMaker.appendChild(this.makerChooseElem);
        this.formMaker.appendChild(this.makerElemName);
        this.formMaker.appendChild(this.MakerElemLabel);
        
        // let makerButton = <HTMLElement>document.createElement('button')
        // makerButton.addEventListener( "click", this.AddElem);
        // this.formMaker.appendChild(makerButton);
        //niewiadomo czemu powyższy kod nie działa
    }
    AddSelectOptions(){
        console.log(this.makerChooseElem.value);
        if (this.makerChooseElem.value == "SelectField") {
            this.makerSelectOptionsInput = <HTMLInputElement>document.createElement("input");
            this.makerSelectOptionsInput.setAttribute("placeholder", "Select Options ");
            this.formMaker.appendChild(this.makerSelectOptionsInput);
            
        }
        else this.formMaker.removeChild(this.makerSelectOptionsInput); 

    }
    AddElem(){
        console.log(this);
        switch (this.makerChooseElem.value) {
            case "InputField":
                let input = new InputField(this.makerElemName.value , this.MakerElemLabel.value);
                this.formFields.push(input);
                break;
                
            case "EmailField":
                let email = new EmailField(this.makerElemName.value , this.MakerElemLabel.value);
                this.formFields.push(email);
                
                break;
            case "CheckboxField":
                let checkbox = new CheckboxField(this.makerElemName.value , this.MakerElemLabel.value);
                this.formFields.push(checkbox);
                break;
            case "DateField":
                let date = new DateField(this.makerElemName.value , this.MakerElemLabel.value);
                this.formFields.push(date);
                break;
            case "TextAreaField":
                let textarea = new TextAreaField(this.makerElemName.value , this.MakerElemLabel.value);
                this.formFields.push(textarea);
                break;
            case "SelectField":
                this.formSelectArray = this.makerSelectOptionsInput.value.split(", ");
                let select = new SelectField( this.makerElemName.value , this.MakerElemLabel.value , this.formSelectArray);
                this.formFields.push(select);
        }
    }
    GetMaker(){
        return this.formMaker;
    }
    MakeForm(){
        this.form = new Form(this.formFields);
        return this.form
    }   

}

// var names:string[] = new Array("Mary","Tom","Jack","Jill")  
// let s = new EmailField("email" , "Email" );
// let d = new InputField("input", "Input") ;
// let xd = new SelectField("select" , "Select" , names ) as Field;
// let dq = new CheckboxField("checkbox", "Checkbox") ;
// let saaa = new DateField("date" , "Data" );
// let deee = new TextAreaField("textArea", "TextArea") ;
// var testfields : Field[] = new Array(s,d,xd, dq ,saaa ,deee);
// let x = document.getElementById("test");
// let testForm = new Form(testfields);
// // x.appendChild(saaa.GetLabel() );
// // x.appendChild(saaa.render());
// x.appendChild(testForm.render());


// let completedFormDiv = document.getElementById("completedFormDiv");
// function TestLog(){
//    completedFormDiv.appendChild(testForm.getValue());
// }

 let x = document.getElementById("test");
let formMaker = new FormMaker();
x.appendChild(formMaker.GetMaker());
function TestLog(){
    formMaker.AddElem();
    console.log(formMaker.formFields);
    
}
function MakeForm(){
  x.appendChild(formMaker.MakeForm().render());
}
let completedFormDiv = document.getElementById("completedFormDiv");
function MakeAnswer(){
   completedFormDiv.appendChild(formMaker.form.getValue());
}