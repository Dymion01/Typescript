



export class MyLocalStorage {
   myStorage ;

  constructor(){
    this.myStorage =localStorage
  }


    
   render(){
     for(let i =0; i<localStorage.length; i++){
      
      let arr = (JSON.parse(localStorage.getItem(localStorage.key(i))));
      console.log(arr);
      let completedForm = <HTMLElement>document.createElement('div');
      completedForm.classList.add("completedForm");
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

    //działa ale z kei getitem itp 
    // for (var x in localStorage){
    //     console.log(x);
    //    console.log(JSON.parse(localStorage.getItem(x)));
    // }
    


  }
}