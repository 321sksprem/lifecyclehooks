import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login';

  signupUsers:any[] =[];
signupObj:any = {
  userName:'',
  email:'',
  password:''


}

loginobj:any ={
  userName:'',

  password:''

}
constructor(){}
ngOnInit(): void {
const localrData= localStorage.getItem('signupUsers');
if(localrData != null){
  this.signupUsers=JSON.parse(localrData)
}
}
onSignUp(){
this.signupUsers.push(this.signupObj)
localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
this.signupObj= {
  userName:'',
  email:'',
  password:''


}
}

onLogin(){
  debugger
const isUserExist = this.signupUsers.find(m => m.userName == this.loginobj.userName && m.password == this.loginobj.password);
if(isUserExist != undefined){
  alert('user login successfully');

}else{
  alert('wrong credentals');
}

}
}
