import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserServiceClient) { }
  user ;
  images: string[] = [
    'img1.jpg',
    'img2.png',
    'img3.png',
    'img4.png',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg'
  ];

  staticHeadings: string[] = [
    'Trump backs plan to end family separations but shirks responsibility',
    'Dwight Howard joins fourth team in four years with trade to Brooklyn Nets',
    'Portugal’s Cristiano Ronaldo celebrates his goal against Morocco, his fourth of the tournament.',
    'No clear evidence probiotics can help with human anxiety, study finds',
    'Rise of the machines: has technology evolved beyond our control?',
    'Should we be worried about surging Antarctic ice melt and sea level rise?',
    'Some rare good climate news: the fossil fuel industry is weaker than ever',
    'iOS 12: everything you need to know about new iPhone features'
  ];

  staticParagraph: string[] = [
    'US President Donald Trump on Wednesday ended the policy of separating immigrant families ' +
    'at the US-Mexico border after public uproar over it. “I didn’t like the sight or the feeling ' +
    'of families being separated,” Trump said. More than 2,000 children have been separated from their ' +
    'family at the border between April 19 and May 31.',
    'The Charlotte Hornets have agreed to trade eight-time All-Star center Dwight Howard to the Brooklyn' +
    ' Nets for center Timofey Mozgov and two second-round draft picks, a person familiar with the situation ' +
    'told the Associated Press on Wednesday.',
    'Portugal captain Cristiano Ronaldo scored a diving header in the fourth minute against Morocco in 2018 FIFA World ' +
    'Cup to become the highest international goal-scorer among European players. The 33-year-old guided a Joao Moutinho cross ' +
    'from a short corner into the net to take his tally to 85 goals. His goal helped Portugal register their first victory in ' +
    'the tournament.',
    'There is no clear sign that taking probiotics can help dampen feelings of anxiety in humans, according to new research, ' +
    'despite evidence that it works for rodents.But researchers who have examined evidence from previous studies say that while ' +
    'probiotics appear to reduce anxiety in rodents with various problems, there is little to show that they offer similar benefits ' +
    'to humans, whether healthy or not.',
    'Technology is starting to behave in intelligent and unpredictable ways that even its creators don’t understand. ' +
    'As machines increasingly shape global events, how can we regain control?',
    'A new study published in Nature using data from a range of satellites found that Antarctica’s contribution has tripled ' +
    'from about 0.2 mm/yr since the 1990s to 0.6 mm/yr since 2012, during which time global sea level rise also spiked. Accelerated ' +
    'ice melt from Antarctica, Greenland, and glaciers have all played a role in the faster recent sea level rise. The question ' +
    'is whether it’s a temporary jump, or if we need to worry about a continued acceleration in Antarctic ice loss.',
    'At the Vatican, the pope faced down a conference full of oil industry executives – the basic argument that fossil fuel reserves' +
    ' must be kept underground has apparently percolated to the top of the world’s biggest organization.',
    'Apple has unveiled all the new features heading to iPhones and iPads at its developer conference in San Francisco on Monday, ' +
    'including speed boost for even older devices, improved privacy and a host of new features.'
  ];

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
    // console.log(this.user);
  }

}
