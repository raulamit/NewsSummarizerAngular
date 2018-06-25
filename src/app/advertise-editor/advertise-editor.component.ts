import { Component, OnInit } from '@angular/core';
import {Advertisement} from '../models/advertise.model.client';
import {AdvertisementServiceClient} from '../services/advertisement.service.client';

@Component({
  selector: 'app-advertise-editor',
  templateUrl: './advertise-editor.component.html',
  styleUrls: ['./advertise-editor.component.css']
})
export class AdvertiseEditorComponent implements OnInit {

  constructor(private adService: AdvertisementServiceClient) { }
  advertisement: Advertisement = new Advertisement();

  saveAd(advertisement: Advertisement) {
    this.adService.saveAd(advertisement)
      .then(advertisement1 => console.log(advertisement1));
  }

  ngOnInit() {
    this.advertisement.title = 'SPRING BOOT & ANGULAR 2';
    this.advertisement.description = 'When it comes to building real world applications that can scale there are a lot of ' +
      'different moving parts. You could manage all of these individual parts on your own or you can leverage tools that will ' +
      'help do this for you. ';
    this.advertisement.videoLink = 'https://www.w3schools.com/html/mov_bbb.mp4';
    this.advertisement.website = 'https://therealdanvega.com/jhipster';
    this.advertisement.company = 'SpringAngularIO';
  }

}
