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


    constructor(name:string, label:string) {
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.type= FieldType.selectBox;
        this.element.name =this.name;


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

    render(): HTMLElement {
        return this.element;
        
    }
    getValue(): any {
        return this.element.value
    }

}

let s = new EmailField("aj" , "hahahahahah");

let x = document.getElementById("test");

x.appendChild(s.render());
