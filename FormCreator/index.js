var FieldType;
(function (FieldType) {
    FieldType["inputBox"] = "text";
    FieldType["textAreaBox"] = "textarea";
    FieldType["dateBox"] = "date";
    FieldType["emailBox"] = "email";
    FieldType["selectBox"] = "select";
    FieldType["checkbox"] = "checkbox";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.inputBox;
        this.element.name = this.name;
        this.element.type = this.type;
    }
    InputField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    InputField.prototype.render = function () {
        return this.element;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label) {
        this.element = document.createElement('textarea');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    TextAreaField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    TextAreaField.prototype.render = function () {
        return this.element;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
var DateField = /** @class */ (function () {
    function DateField(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.dateBox;
        this.element.name = this.name;
        this.element.type = this.type;
    }
    DateField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    DateField.prototype.render = function () {
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.type = FieldType.emailBox;
        this.element.name = this.name;
        this.element.type = this.type;
    }
    EmailField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    EmailField.prototype.render = function () {
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var SelectField = /** @class */ (function () {
    function SelectField(name, label, arr) {
        this.element = document.createElement('select');
        this.name = name;
        this.label = label;
        this.type = FieldType.selectBox;
        this.element.name = this.name;
        for (var i = 0; i < arr.length; i++) {
            var option = document.createElement('option');
            option.setAttribute("value", arr[i]);
            option.innerHTML = arr[i];
            this.element.appendChild(option);
        }
    }
    SelectField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    SelectField.prototype.render = function () {
        return this.element;
    };
    SelectField.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.type = FieldType.checkbox;
        this.element.type = this.type;
    }
    CheckboxField.prototype.GetLabel = function () {
        var labelElement;
        labelElement = document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    };
    CheckboxField.prototype.render = function () {
        return this.element;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.checked;
    };
    return CheckboxField;
}());
var Form = /** @class */ (function () {
    function Form(fields) {
        var _this = this;
        this.form = document.createElement('form');
        this.fields = fields;
        for (var i = 0; i < fields.length; i++) {
            this.form.appendChild(fields[i].GetLabel());
            this.form.appendChild(fields[i].render());
        }
        var addInstOfFormBtn = document.createElement("input");
        addInstOfFormBtn.type = "button";
        addInstOfFormBtn.value = "Take the survey";
        addInstOfFormBtn.onclick = function () { return _this.getValue(); };
        this.form.appendChild(addInstOfFormBtn);
    }
    Form.prototype.render = function () {
        return this.form;
    };
    Form.prototype.getValue = function () {
        this.comletedForm = document.createElement('div');
        this.comletedForm.classList.add("completedForm");
        for (var i = 0; i < this.fields.length; i++) {
            var p = document.createElement('p');
            p.classList.add("para");
            p.innerHTML = this.fields[i].label + ": " + this.fields[i].getValue();
            this.comletedForm.appendChild(p);
        }
        var completedFormDiv = document.getElementById("completedFormDiv");
        completedFormDiv.appendChild(this.comletedForm);
        return this.comletedForm;
    };
    return Form;
}());
var FormMaker = /** @class */ (function () {
    function FormMaker() {
        var _this = this;
        this.arr = ["InputField", "EmailField", "SelectField", "CheckboxField", "DateField", "TextAreaField"];
        this.formFields = [];
        this.formMaker = document.createElement('form');
        this.formMaker.classList.add('formMaker');
        var makerText = document.createElement('p');
        makerText.innerHTML = " Choose and make element of Form ";
        this.makerChooseElem = document.createElement('select');
        for (var i = 0; i < this.arr.length; i++) {
            var option = document.createElement('option');
            option.setAttribute("value", this.arr[i]);
            option.innerHTML = this.arr[i];
            this.makerChooseElem.appendChild(option);
        }
        this.makerChooseElem.addEventListener("change", function () { return _this.AddSelectOptions(); });
        this.makerElemName = document.createElement('input');
        this.makerElemName.setAttribute("placeholder", "Name");
        this.MakerElemLabel = document.createElement('input');
        this.MakerElemLabel.setAttribute("placeholder", "Label");
        this.formMaker.appendChild(makerText);
        this.formMaker.appendChild(this.makerChooseElem);
        this.formMaker.appendChild(this.makerElemName);
        this.formMaker.appendChild(this.MakerElemLabel);
        var makerButton = document.createElement('input');
        makerButton.type = "button";
        makerButton.value = "Ddd to form";
        makerButton.onclick = function () { return _this.AddElem(); };
        this.formMaker.appendChild(makerButton);
        var MakeFormButton = document.createElement("input");
        MakeFormButton.type = "button";
        MakeFormButton.value = "Make a form!";
        MakeFormButton.onclick = function () { return _this.MakeForm(); };
        this.formMaker.appendChild(MakeFormButton);
    }
    FormMaker.prototype.AddSelectOptions = function () {
        console.log(this.makerChooseElem.value);
        if (this.makerChooseElem.value == "SelectField") {
            this.makerSelectOptionsInput = document.createElement("input");
            this.makerSelectOptionsInput.setAttribute("placeholder", "Select Options ");
            this.formMaker.appendChild(this.makerSelectOptionsInput);
        }
        else
            this.formMaker.removeChild(this.makerSelectOptionsInput);
    };
    FormMaker.prototype.AddElem = function () {
        console.log(this);
        switch (this.makerChooseElem.value) {
            case "InputField":
                var input = new InputField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(input);
                break;
            case "EmailField":
                var email = new EmailField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(email);
                break;
            case "CheckboxField":
                var checkbox = new CheckboxField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(checkbox);
                break;
            case "DateField":
                var date = new DateField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(date);
                break;
            case "TextAreaField":
                var textarea = new TextAreaField(this.makerElemName.value, this.MakerElemLabel.value);
                this.formFields.push(textarea);
                break;
            case "SelectField":
                this.formSelectArray = this.makerSelectOptionsInput.value.split(", ");
                var select = new SelectField(this.makerElemName.value, this.MakerElemLabel.value, this.formSelectArray);
                this.formFields.push(select);
        }
    };
    FormMaker.prototype.GetMaker = function () {
        return this.formMaker;
    };
    FormMaker.prototype.MakeForm = function () {
        var x = document.getElementById("test");
        this.form = new Form(this.formFields);
        x.appendChild(this.form.render());
    };
    return FormMaker;
}());
var x = document.getElementById("test");
var formMaker = new FormMaker();
x.appendChild(formMaker.GetMaker());
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
// function TestLog(){
//     formMaker.AddElem();
//     console.log(formMaker.formFields);
// }
// function MakeForm(){
//   x.appendChild(formMaker.MakeForm().render());
// }
// let completedFormDiv = document.getElementById("completedFormDiv");
// function MakeAnswer(){
//    completedFormDiv.appendChild(formMaker.form.getValue());
// }
