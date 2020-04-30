// enum FieldType {
//     text = 1,
//     textarea,
//     date,
//     email,
//     select,
//     checkbox
// }
import {FieldType} from './FieldType';
export interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
    GetLabel(): HTMLElement;
}
