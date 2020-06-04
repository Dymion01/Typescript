



export class MyLocalStorage {
   myStorage ;

  constructor(){
    this.myStorage =localStorage
  }


    
   render(){
     for(let i =0; i<localStorage.length; i++){
      
      let arr = (JSON.parse(localStorage.getItem(localStorage.key(i))));
      console.log(arr);
      let id = localStorage.key(i);
      let completedForm = <HTMLElement>document.createElement('div');
      completedForm.classList.add("completedForm");
      completedForm.id=localStorage.key(i);
      let deleteBtn = <HTMLElement>document.createElement('button');
        deleteBtn.innerText="Remove"
        deleteBtn.classList.add('deleteBtn')
      deleteBtn.onclick = () =>{
        console.log(localStorage.key(i));
          let toRemove = document.getElementById(id);
          console.log(toRemove);
          completedFormDiv.removeChild(toRemove);
          console.log(completedFormDiv)

          localStorage.removeItem(localStorage.key(i));

      }
      completedForm.appendChild(deleteBtn);
      for (let j = 0 ; j< arr.length ; j++){
        let obj = arr[j];
        let p = <HTMLElement>document.createElement('p');
        p.classList.add("para");
        p.innerHTML = obj.name + ": " + obj.value;
        completedForm.appendChild(p);
          // console.log(obj.name + " " + obj.value);
      }
      let completedFormDiv = document.getElementById("completedFormDiv");
      completedFormDiv.appendChild(completedForm);

    }

  
    


  }
}