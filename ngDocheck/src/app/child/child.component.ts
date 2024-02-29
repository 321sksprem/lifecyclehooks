import { Component,OnInit,Input,SimpleChange,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,DoCheck{

@Input() parentData:{count:number} = {count:0}
diff = undefined;

 constructor(){}
  ngOnInit(): void {
   console.log("init")
   this.diff=this.parentData.count;
  }

  ngDoCheck(): void {
    console.log("diff",this.parentData.count)
    this.diff = this.parentData.count
}

  ngOnChange(values:SimpleChange){
     console.log("simplechanges",values);
     this.diff = values ['parentData'].currentUser.count;
  }


}
