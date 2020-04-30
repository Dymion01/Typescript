import {FieldType} from './FieldType';
import {Field} from './Field';

export class CheckboxField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLInputElement;
    constructor(name: string, label: string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.type = FieldType.checkbox;
        this.element.type = this.type;
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
        return this.element.checked;
    }
}
