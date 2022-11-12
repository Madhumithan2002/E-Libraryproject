import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor() { }

  addbook = new FormGroup({
    BookID: new FormControl('', [Validators.required]),
    BookTitle: new FormControl('', [Validators.required, Validators.minLength(50)]),
    BookDesc: new FormControl('', [Validators.required, Validators.minLength(150)]),
    AuthorName: new FormControl('', [Validators.required, Validators.minLength(50)]),
    Numofbookavil: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  addbk() {
    console.log(this.addbook.value)
  }

}
