import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  imgURL:string="https://www.indiaspend.com/h-upload/old_images/343089-library1440.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
