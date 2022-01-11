import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isToggleOpen = false;
  books = [
    {
      "bookid":1,
      "img": "assets/book1.jpg",
      "txt": "The Famous Five",
      "rent": 2
    },
    {
      "bookid":2,
      "img": "assets/book2.jpg",
      "txt": "The Psychology of Money",
      "rent": 4
    },
    {
      "bookid":3,
      "img": "assets/book3.jpg",
      "txt": "Do Epic Shit",
      "rent": 4
    },
    {
      "bookid":4,
      "img": "assets/book4.jpg",
      "txt": "Manoroma yearbook 2022",
      "rent": 5
    },
    {
      "bookid":5,
      "img": "assets/book5.jpg",
      "txt": "The broken pillars of democracy",
      "rent": 2
    },
    {
      "bookid":6,
      "img": "assets/book6.jpg",
      "txt": "Indian Art and culture",
      "rent": 3
    },
    {
      "bookid":7,
      "img": "assets/book7.jpg",
      "txt": "Yuktahaar the Belly and Brain Diet",
      "rent": 3
    },
    {
      "bookid":8,
      "img": "assets/book8.jpg",
      "txt": "Loktantra ke tute stabdh",
      "rent": 3
    },
    {
      "bookid":9,
      "img": "assets/book9.jpg",
      "txt": "Sudha Murty",
      "rent": 4
    },
    {
      "bookid":10,
      "img": "assets/book10.jpg",
      "txt": "Missing 400 days",
      "rent": 2
    },
    {
      "bookid":11,
      "img": "assets/book11.jpg",
      "txt": "the power of subconcious mind",
      "rent": 4
    },
    {
      "bookid":12,
      "img": "assets/book12.jpg",
      "txt": "Eat that Frog",
      "rent": 3
    },
    {
      "bookid":13,
      "img": "assets/book13.jpg",
      "txt": "How to win friends..",
      "rent": 4
    },
    {
      "bookid":14,
      "img": "assets/book14.jpg",
      "txt": "Attitude is Everything",
      "rent": 3
    },
    {
      "bookid":15,
      "img": "assets/book15.jpg",
      "txt": "Karma-Guide for destiny",
      "rent": 2
    },
    {
      "bookid":16,
      "img": "assets/book16.jpg",
      "txt": "General Knowledege 2022",
      "rent": 3
    },
    {
      "bookid":17,
      "img": "assets/book17.jpg",
      "txt": "Who will cry when you die",
      "rent": 3
    },
    {
      "bookid":18,
      "img": "assets/book18.jpg",
      "txt": "The monk who sold his Ferrari",
      "rent": 2
    },
    {
      "bookid":19,
      "img": "assets/book19.jpg",
      "txt": "The blue Umbrella",
      "rent": 4
    },
    {
      "bookid":20,
      "img": "assets/book20.jpg",
      "txt": "One arranged Murder",
      "rent": 3
    },
  ]
  startdate:any;
  enddate:any;

  constructor(private servicesservice:ServicesService) { }

  ngOnInit(): void {
  }

  onRentClick(){
    console.log(this.startdate,this.enddate)
    this.isToggleOpen = !this.isToggleOpen;
    this.servicesservice.saveGetBooks()
      .subscribe((resp)=>{
        console.log(resp)
      })
  
  }

}
