import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = [
    {
      "img": "assets/book1.jpg",
      "txt": "The Famous Five"
    },
    {
      "img": "assets/book2.jpg",
      "txt": "The Psychology of Money"
    },
    {
      "img": "assets/book3.jpg",
      "txt": "Do Epic Shit"
    },
    {
      "img": "assets/book4.jpg",
      "txt": "Manoroma yearbook 2022"
    },
    {
      "img": "assets/book5.jpg",
      "txt": "Attitude is Everything"
    },
    {
      "img": "assets/book6.jpg",
      "txt": "Indian Art and culture"
    },
    {
      "img": "assets/book7.jpg",
      "txt": "How to win friends.."
    },
    {
      "img": "assets/book8.jpg",
      "txt": "Loktantra ke tute stabdh"
    },
    {
      "img": "assets/book9.jpg",
      "txt": "Sudha Murty"
    },
    {
      "img": "assets/book10.jpg",
      "txt": "Missing 400 days"
    },
    {
      "img": "assets/book11.jpg",
      "txt": "Eat that Frog"
    },
    {
      "img": "assets/book12.jpg",
      "txt": "Karma-Guide for destiny"
    },
    {
      "img": "assets/book13.jpg",
      "txt": "General Knowledege 2022"
    },
    {
      "img": "assets/book14.jpg",
      "txt": "Who will cry when you die"
    },
    

  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRentClick(){
    this.router.navigate(['/login'])
  }
}
