import {FieldType} from './FieldType';
import {Field} from './Field';
export class ExtendedSelectField implements Field {
    name: string;
    label: string;
    type: FieldType;
    all:HTMLElement;
    element: HTMLSelectElement;
    regionselect: HTMLSelectElement;
    regions: string[]=['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar'];
    constructor(name: string, label: string, ) {
        this.all = <HTMLElement>document.createElement('div');
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.type = FieldType.selectBox;
        this.element.name = this.name;
        this.regionselect = <HTMLSelectElement>document.createElement('select');
        this.regionselect.setAttribute("placeholder", "Select region ");
        // this.regionselect.addEventListener('change', this.filteredSelect);
            this.regionselect.onchange = () => {this.filteredSelect()};
        for (let i = 0; i < this.regions.length; i++) {
            let option = <HTMLElement>document.createElement('option');
            option.setAttribute("value", this.regions[i]);
            option.innerHTML = this.regions[i];
            this.regionselect.appendChild(option);
            
        }
        this.all.appendChild(this.regionselect);

        this.fetchOptions<{name: string , region:string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.filter(q => q.region == "Asia").
            map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
                this.element.options.add(option);
                
            })
        });    
        console.log(this.element.options);
 
        this.all.appendChild(this.element);
    }
    filteredSelect()  {

        // for(let i =0; i<this.element.options.length; i++)
        // {

        //     console.log(this.element.options[i]);
        // this.element.options.remove(i);
        
       // }
        this.element.innerText = null;
        console.log(this.element.options.length);
        this.fetchOptions<{name: string , region:string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.filter(q => q.region == this.regionselect.value).
            map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
                this.element.options.add(option);
            })
        });
        
    }
    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
        .then(res => res.json())
        .then(res => { 
            return res;
        })
        .catch((e) => {
          console.log("API errore fetching ");
        });
    }
    GetLabel(): HTMLElement {
        let labelElement: HTMLElement;
        labelElement = <HTMLElement>document.createElement('LABEL');
        labelElement.setAttribute("for", this.name);
        labelElement.innerHTML = this.label;
        return labelElement;
    }
    render(): HTMLElement {
        return this.all;
    }
    getValue(): any {
        return this.element.value;
    }
}
