import {FieldType} from './FieldType';
import {Field} from './Field';
export class SelectField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLSelectElement;
    constructor(name: string, label: string, arr: string[]) {
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.type = FieldType.selectBox;
        this.element.name = this.name;
        for (let i = 0; i < arr.length; i++) {
            let option = <HTMLElement>document.createElement('option');
            option.setAttribute("value", arr[i]);
            option.innerHTML = arr[i];
            this.element.appendChild(option);
        }
    }
    GetLabel(): HTMLElement {
        let labelElement: HTMLElement;
        labelElement = <HTMLElement>document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    }
    render(): HTMLElement {
        return this.element;
    }
    getValue(): any {
        return this.element.value;
    }
}
