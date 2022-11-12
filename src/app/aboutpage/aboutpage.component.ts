import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  imgURL:string="https://wallpaper.dog/large/20542091.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
