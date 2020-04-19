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
        return this.element.value
    }

}
// var names:string[] = new Array("Mary","Tom","Jack","Jill")  
// let s = new SelectField("aj" , "hahahahahah" ,  names);

// let x = document.getElementById("test");

// x.appendChild(s.GetLabel() );
// x.appendChild(s.render());
