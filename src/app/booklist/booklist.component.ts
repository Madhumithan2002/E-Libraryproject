import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
addbook: any[]=[
  {
    BookID: 101,
    BookTitle: 'one day life will change',
    AuthorName: 'Henry james',
    BookPrice: 250.00,
    Numofbookavil:50,
  },
  {
    BookID: 102,
    BookTitle: 'A Better india:A Better World',
    AuthorName: 'Narayana Murthy',
    BookPrice: 350.00,
    Numofbookavil:30,
  },
  {
    BookID: 103,
    BookTitle: 'A Passage to india',
    AuthorName: 'E.M.Foster',
    BookPrice: 150.00,
    Numofbookavil:40,
  },
  {
    BookID: 104,
    BookTitle: 'A Suitable Boy',
    AuthorName: 'Vikram seth',
    BookPrice: 450.00,
    Numofbookavil:50,
  },
  {
    BookID: 105,
    BookTitle: 'A Tale of Two Cities',
    AuthorName: 'Charles Darwin',
    BookPrice: 250.00,
    Numofbookavil:50,
  },
  {
    BookID: 106,
    BookTitle: 'Oliver Twist',
    AuthorName: 'Charles Darwin',
    BookPrice: 550.00,
    Numofbookavil:50,
  },
  {
    BookID: 107,
    BookTitle: 'Origin of Species',
    AuthorName: 'Charles Darwin',
    BookPrice: 250.00,
    Numofbookavil:60,
  },
  {
    BookID: 108,
    BookTitle: 'Deep Shikha',
    AuthorName: 'Mahadevi Verma',
    BookPrice: 350.00,
    Numofbookavil:45,
  },
  {
    BookID: 109,
    BookTitle: 'Aadhe Adhure',
    AuthorName: 'Mohan Rakesh',
    BookPrice: 650.00,
    Numofbookavil:55,
  },
  {
    BookID: 110,
    BookTitle: 'Ain-i-Akibari',
    AuthorName: 'Abul Fazl',
    BookPrice: 450.00,
    Numofbookavil:50,
  },
  {
    BookID: 111,
    BookTitle: 'Convenient Action',
    AuthorName: 'Narendra Modi',
    BookPrice: 250.00,
    Numofbookavil:70,
  },
];



  constructor() { }

  ngOnInit(): void {
  }

}
