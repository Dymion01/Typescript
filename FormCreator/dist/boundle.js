!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.inputBox="text",e.textAreaBox="textarea",e.dateBox="date",e.emailBox="email",e.selectBox="select",e.checkbox="checkbox"}(t.FieldType||(t.FieldType={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);(new(r(11).MyLocalStorage)).render();var o=document.getElementById("test"),i=new n.FormMaker;o.appendChild(i.GetMaker())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(4),i=r(6),l=r(7),a=r(8),u=r(9),s=r(10),c=function(){function e(){var e=this;this.arr=["InputField","EmailField","SelectField","CheckboxField","DateField","TextAreaField"],this.formFields=[],this.formMaker=document.createElement("form"),this.formMaker.classList.add("formMaker");var t=document.createElement("p");t.innerHTML=" Choose and make element of Form ",this.makerChooseElem=document.createElement("select");for(var r=0;r<this.arr.length;r++){var n=document.createElement("option");n.setAttribute("value",this.arr[r]),n.innerHTML=this.arr[r],this.makerChooseElem.appendChild(n)}this.makerChooseElem.addEventListener("change",(function(){return e.AddSelectOptions()})),this.makerElemName=document.createElement("input"),this.makerElemName.setAttribute("placeholder","Name"),this.MakerElemLabel=document.createElement("input"),this.MakerElemLabel.setAttribute("placeholder","Label"),this.formMaker.appendChild(t),this.formMaker.appendChild(this.makerChooseElem),this.formMaker.appendChild(this.makerElemName),this.formMaker.appendChild(this.MakerElemLabel);var o=document.createElement("input");o.type="button",o.value="Ddd to form",o.onclick=function(){return e.AddElem()},this.formMaker.appendChild(o);var i=document.createElement("input");i.type="button",i.value="Make a form!",i.onclick=function(){return e.MakeForm()},this.formMaker.appendChild(i)}return e.prototype.AddSelectOptions=function(){console.log(this.makerChooseElem.value),"SelectField"==this.makerChooseElem.value?(this.makerSelectOptionsInput=document.createElement("input"),this.makerSelectOptionsInput.setAttribute("placeholder","Select Options "),this.formMaker.insertBefore(this.makerSelectOptionsInput,this.MakerElemLabel.nextSibling)):this.formMaker.removeChild(this.makerSelectOptionsInput)},e.prototype.AddElem=function(){switch(console.log(this),this.makerChooseElem.value){case"InputField":var e=new o.InputField(this.makerElemName.value,this.MakerElemLabel.value);this.formFields.push(e);break;case"EmailField":var t=new i.EmailField(this.makerElemName.value,this.MakerElemLabel.value);this.formFields.push(t);break;case"CheckboxField":var r=new s.CheckboxField(this.makerElemName.value,this.MakerElemLabel.value);this.formFields.push(r);break;case"DateField":var n=new u.DateField(this.makerElemName.value,this.MakerElemLabel.value);this.formFields.push(n);break;case"TextAreaField":var c=new a.TextAreaField(this.makerElemName.value,this.MakerElemLabel.value);this.formFields.push(c);break;case"SelectField":this.formSelectArray=this.makerSelectOptionsInput.value.split(", ");var m=new l.SelectField(this.makerElemName.value,this.MakerElemLabel.value,this.formSelectArray);this.formFields.push(m)}},e.prototype.GetMaker=function(){return this.formMaker},e.prototype.MakeForm=function(){var e=document.getElementById("test");this.form=new n.Form(this.formFields),e.appendChild(this.form.render())},e}();t.FormMaker=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t=this;this.form=document.createElement("form"),this.fields=e;for(var r=0;r<e.length;r++)this.form.appendChild(e[r].GetLabel()),this.form.appendChild(e[r].render());var n=document.createElement("input");n.type="button",n.value="Take the survey",n.onclick=function(){return t.getValue()},this.form.appendChild(n)}return e.prototype.render=function(){return this.form},e.prototype.getValue=function(){var e=this;this.comletedForm=document.createElement("div"),this.comletedForm.classList.add("completedForm");var t=document.getElementById("completedFormDiv");this.comletedForm.id=Date.now().toString();var r=document.createElement("button");r.onclick=function(){var r=document.getElementById(e.comletedForm.id);t.removeChild(r),localStorage.removeItem(e.comletedForm.id)},this.comletedForm.appendChild(r);for(var n=0;n<this.fields.length;n++){var o=document.createElement("p");o.classList.add("para"),o.innerHTML=this.fields[n].label+": "+this.fields[n].getValue(),this.comletedForm.appendChild(o)}return t.appendChild(this.comletedForm),localStorage.setItem(this.comletedForm.id,JSON.stringify($(this.form).serializeArray())),console.log(localStorage),this.comletedForm},e}();t.Form=n},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(i<3?o(l):i>3?o(t,r,l):o(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(5),l=function(){function e(e,t){this.element=document.createElement("input"),this.name=e,this.label=t,this.type=o.FieldType.inputBox,this.element.name=this.name,this.element.type=this.type}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},n([i.LogProp],e.prototype,"name",void 0),n([i.LogProp],e.prototype,"label",void 0),n([i.LogProp],e.prototype,"type",void 0),n([i.LogProp],e.prototype,"element",void 0),n([i.LogMethod],e.prototype,"GetLabel",null),n([i.LogMethod],e.prototype,"render",null),n([i.LogMethod],e.prototype,"getValue",null),e}();t.InputField=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LogMethod=function(e,t,r){console.log("LOGMETHOD: ",e,t,r)},t.LogProp=function(e,t){console.log("LOGPROP: ",e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t){this.element=document.createElement("input"),this.name=e,this.label=t,this.type=n.FieldType.emailBox,this.element.name=this.name,this.element.type=this.type}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.EmailField=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t,r){this.element=document.createElement("select"),this.name=e,this.label=t,this.type=n.FieldType.selectBox,this.element.name=this.name;for(var o=0;o<r.length;o++){var i=document.createElement("option");i.setAttribute("value",r[o]),i.innerHTML=r[o],this.element.appendChild(i)}}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.SelectField=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this.element=document.createElement("textarea"),this.name=e,this.label=t,this.element.name=this.name}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.TextAreaField=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t){this.element=document.createElement("input"),this.name=e,this.label=t,this.type=n.FieldType.dateBox,this.element.name=this.name,this.element.type=this.type}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.DateField=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(){function e(e,t){this.element=document.createElement("input"),this.name=e,this.label=t,this.element.name=this.name,this.type=n.FieldType.checkbox,this.element.type=this.type}return e.prototype.GetLabel=function(){var e;return(e=document.createElement("LABEL")).setAttribute("for",this.name),e.innerHTML=this.label,e},e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.checked},e}();t.CheckboxField=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.myStorage=localStorage}return e.prototype.render=function(){for(var e=function(e){var t=JSON.parse(localStorage.getItem(localStorage.key(e)));console.log(t);var r=document.createElement("div");r.classList.add("completedForm"),r.id=localStorage.key(e);var n=document.createElement("button");n.onclick=function(){console.log(localStorage.key(e));var t=document.getElementById(localStorage.key(e));a.removeChild(t),localStorage.removeItem(localStorage.key(e))},r.appendChild(n);for(var o=0;o<t.length;o++){var i=t[o],l=document.createElement("p");l.classList.add("para"),l.innerHTML=i.name+": "+i.value,r.appendChild(l)}var a=document.getElementById("completedFormDiv");a.appendChild(r)},t=0;t<localStorage.length;t++)e(t)},e}();t.MyLocalStorage=n}]);