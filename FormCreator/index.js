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
        return this.element.value;
    };
    return CheckboxField;
}());
var Form = /** @class */ (function () {
    function Form(fields) {
        this.form = document.createElement('form');
        this.fields = fields;
        for (var i = 0; i < fields.length; i++) {
            this.form.appendChild(fields[i].GetLabel());
            this.form.appendChild(fields[i].render());
        }
    }
    Form.prototype.render = function () {
        return this.form;
    };
    Form.prototype.getValue = function () {
        for (var i = 0; i < this.fields.length; i++) {
            // this.values.push( this.fields[i].getValue());
            console.log(this.fields[i].getValue());
        }
        return this.values;
    };
    return Form;
}());
var names = new Array("Mary", "Tom", "Jack", "Jill");
var s = new EmailField("email", "Email");
var d = new InputField("input", "Input");
var xd = new SelectField("select", "Select", names);
var dq = new CheckboxField("checkbox", "Checkbox");
var saaa = new DateField("date", "Data");
var deee = new TextAreaField("textArea", "TextArea");
var testfields = new Array(s, d, xd, dq, saaa, deee);
var x = document.getElementById("test");
var testForm = new Form(testfields);
// x.appendChild(saaa.GetLabel() );
// x.appendChild(saaa.render());
x.appendChild(testForm.render());
function TestLog() {
    console.log(testForm.getValue());
}
