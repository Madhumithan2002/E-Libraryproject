import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchbox = new FormGroup({
       BookTitle : new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    
  }

}
