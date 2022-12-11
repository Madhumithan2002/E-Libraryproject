import { Component, OnInit } from '@angular/core';
import { PassService } from '../pass.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:PassService) { }

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


