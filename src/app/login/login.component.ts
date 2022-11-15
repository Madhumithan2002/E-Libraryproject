import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  library =new FormGroup({
    UserName:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required])
  })

  useronvalid:boolean=false;

  constructor( private loginn:Router) { }



  ngOnInit(): void {
  }

  login(){

    console.log(this.library.value);


    if(this.library.controls.UserName.value !='madhumithan' || this.library.controls.Password.value !='@2215'){
      this.useronvalid=true
    }
    else{
      this.useronvalid=false;
      localStorage.setItem('UserName',this.library.controls.UserName.value);
      this.loginn.navigateByUrl('/AddBook');
    }
  }


}
