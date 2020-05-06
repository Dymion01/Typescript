import {FormMaker} from './FormMaker';
import {MyLocalStorage} from './LocalStorage';
let q = new MyLocalStorage();
// document.onload= () => q.render();
q.render();
let x = document.getElementById("test");
let formMaker = new FormMaker();
x.appendChild(formMaker.GetMaker());

// var names:string[] = new Array("Mary","Tom","Jack","Jill")  
// let s = new EmailField("email" , "Email" );
// let d = new InputField("input", "Input") ;
// let xd = new SelectField("select" , "Select" , names ) as Field;
// let dq = new CheckboxField("checkbox", "Checkbox") ;
// let saaa = new DateField("date" , "Data" );
// let deee = new TextAreaField("textArea", "TextArea") ;
// // var testfields : Field[] = new Array(s,d,xd, dq ,saaa ,deee);
// let x = document.getElementById("test");
// let testForm = new Form(testfields);
// // x.appendChild(saaa.GetLabel() );
// // x.appendChild(saaa.render());
// x.appendChild(testForm.render());
// x.appendChild(d.GetLabel());
// x.appendChild(d.render());

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