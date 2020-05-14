import {FieldType} from './FieldType';
import {Field} from './Field';
import {LogMethod , LogProp } from './decorators'



export class InputField implements Field {
    @LogProp
    name: string;
    @LogProp
    label: string;
    @LogProp
    type: FieldType;
    @LogProp
    element: HTMLInputElement;
    constructor(name: string, label: string) {
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.inputBox;
        this.element.name = this.name;
        this.element.type = this.type;
    }
    @LogMethod
    GetLabel(): HTMLElement {
        let labelElement: HTMLElement;
        labelElement = <HTMLElement>document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    }
    @LogMethod
    render(): HTMLElement {
        return this.element;
    }
    @LogMethod
    getValue(): any {
        return this.element.value;
    }
}
