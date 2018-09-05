import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get-json-data',
  templateUrl: './get-json-data.component.html',
  styleUrls: ['./get-json-data.component.css']
})
export class GetJsonDataComponent implements OnInit {
  name:string = '';
  age:number;
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }
  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
      name:'mark',
      age: 41
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }

  ngOnInit() {
  }

}
