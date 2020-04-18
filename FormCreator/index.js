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
    EmailField.prototype.render = function () {
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var SelectField = /** @class */ (function () {
    function SelectField(name, label) {
        this.element = document.createElement('select');
        this.name = name;
        this.label = label;
        this.type = FieldType.selectBox;
        this.element.name = this.name;
    }
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
    CheckboxField.prototype.render = function () {
        return this.element;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.value;
    };
    return CheckboxField;
}());
var s = new EmailField("aj", "hahahahahah");
var x = document.getElementById("test");
x.appendChild(s.render());
