import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  images: string[] = [
    'img1.jpg',
    'img2.png',
    'img3.png',
    'img4.png'
  ];

  staticHeadings: string[] = [
    'Trump backs plan to end family separations but shirks responsibility',
    'Dwight Howard joins fourth team in four years with trade to Brooklyn Nets',
    'Portugal’s Cristiano Ronaldo celebrates his goal against Morocco, his fourth of the tournament.',
    'No clear evidence probiotics can help with human anxiety, study finds'
  ];

  staticParagraph: string[] = [
    'Trump backs plan to end family separations but shirks responsibility',
    'Dwight Howard joins fourth team in four years with trade to Brooklyn Nets',
    'Portugal’s Cristiano Ronaldo celebrates his goal against Morocco, his fourth of the tournament.',
    'No clear evidence probiotics can help with human anxiety, study finds'
  ];

  ngOnInit() {
  }

}
