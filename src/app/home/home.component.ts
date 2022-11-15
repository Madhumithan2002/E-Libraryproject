import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgURL:string="https://static.vecteezy.com/system/resources/previews/004/449/478/non_2x/welcome-to-book-store-landing-page-template-bookshop-website-interface-idea-with-flat-illustrations-library-homepage-layout-reader-sit-on-stack-of-tomes-web-banner-webpage-cartoon-concept-vector.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
