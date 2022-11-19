import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  userlog:boolean=true;

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
  

    let UserName = localStorage.getItem('UserName');

    if(UserName == null){
      this.userlog = false;
    }
    else (UserName == 'madhumithan');{
      this.userlog =true;
    }
  }
}


