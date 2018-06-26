import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../models/advertise.model.client';
import {AdvertisementServiceClient} from '../services/advertisement.service.client';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {ADVERTISER, EDITOR} from '../constants';

@Component({
  selector: 'app-advertise-editor',
  templateUrl: './advertise-editor.component.html',
  styleUrls: ['./advertise-editor.component.css']
})
export class AdvertiseEditorComponent implements OnInit {

  constructor(private adService: AdvertisementServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  advertisement: Advertisement = new Advertisement();
  user;

  saveAd(advertisement: Advertisement) {
    this.adService.saveAd(advertisement)
      .then(advertisement1 => console.log(advertisement1));
  }

  ngOnInit() {
    if (!this.user || !this.user.role || this.user.role !== ADVERTISER) {
      console.log(this.user);
      this.router.navigate(['home']);
      this.snackBar.open('Login as Advertiser to create Ads',
        'Will Do!',
        {duration: 2000});
    } else {
      this.advertisement.title = 'SPRING BOOT & ANGULAR 2';
      this.advertisement.description = 'When it comes to building real world applications that can scale there are a lot of ' +
        'different moving parts. You could manage all of these individual parts on your own or you can leverage tools that will ' +
        'help do this for you. ';
      this.advertisement.videoLink = 'https://player.vimeo.com/external/241439758.hd.mp4?s=85589fa941c4e7ecd79df274627b516056526f12&profile_id=174';
      this.advertisement.website = 'https://therealdanvega.com/jhipster';
      this.advertisement.company = 'SpringAngularIO';
    }
  }
}
