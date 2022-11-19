import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor(private adim:Router) { }

  ngOnInit(): void {
    let UserName = localStorage.getItem('UserName');
    if (UserName == 'madhumithan') {
      this.adim.navigateByUrl('/Home');
    }
  }

}
