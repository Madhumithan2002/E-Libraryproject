import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private adim: Router) { }

   mybooks: any[] = [];

  @Input()addbook = new FormGroup({
    BookID: new FormControl('', [Validators.required]),
    BookTitle: new FormControl('', [Validators.required, Validators.minLength(50)]),
    Bookprice: new FormControl('', [Validators.required, Validators.minLength(150)]),
    AuthorName: new FormControl('', [Validators.required, Validators.minLength(50)]),
    Numofbookavil: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    let UserName = localStorage.getItem('UserName');
    if (UserName == null || UserName == '') {
      this.adim.navigateByUrl('/login');
    }
  }

  addbk() {

    var Bid = this.addbook.get('BookID')?.value;
    var title = this.addbook.get('BookTitle')?.value;
    var Aname = this.addbook.get('AuthorName')?.value;
    var price = this.addbook.get('Bookprice')?.value;
    var numbooks = this.addbook.get('Numofbookavil')?.value;


     this.mybooks.push({
      BookID: Bid,
      BookTitle: title,
      AuthorName: Aname,
      Bookprice: price,
      Numofbookavil: numbooks,
    })
  }
}
