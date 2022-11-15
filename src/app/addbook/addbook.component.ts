import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private adim: Router) { }

  addbook = new FormGroup({
    BookID: new FormControl('', [Validators.required]),
    BookTitle: new FormControl('', [Validators.required, Validators.minLength(50)]),
    BookDesc: new FormControl('', [Validators.required, Validators.minLength(150)]),
    AuthorName: new FormControl('', [Validators.required, Validators.minLength(50)]),
    Numofbookavil: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    let UserName = localStorage.getItem('UserName');
    if (UserName == null || UserName == '') {
      this.adim.navigateByUrl('/login');
    }
  }

  addbk() { }
}
