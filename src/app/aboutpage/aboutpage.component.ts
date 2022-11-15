import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  imgURL:string="https://i0.wp.com/rabble.ca/wp-content/uploads/2019/08/book-865x400.jpg?fit=%2C&ssl=1"

  constructor() { }

  ngOnInit(): void {
  }

}
