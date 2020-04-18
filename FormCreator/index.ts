enum FieldType {
    inputBox = 1,
    textAreaBox,
    dateBox,
    emailBox,
    selectBox,
    CheckBox
}

interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}

