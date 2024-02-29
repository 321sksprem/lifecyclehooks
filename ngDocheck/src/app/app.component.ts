import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngDocheck';
 private parentData:{count:number} ={count:0}

  constructor(){ }

  ngOnInit(): void {

  }


  changeData(){

  this.parentData.count = this.parentData.count + 1

  }
}
