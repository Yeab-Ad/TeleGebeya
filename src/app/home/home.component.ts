import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../Service/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public service: ErrorService) {}

  ngOnInit(): void {}

  error: boolean = false;

  errorShow() {
    this.error = !this.error;
  }

  category = [
    {
      name: 'Mobile Phone',
      moreInfo: `Genuine, quality, and affordable phone ranging 
      from feature phones to low-end and high-end 
      smart phones.`,
      img: './../../assets/image/NoPath.png',
    },
    {
      name: 'Dongles and Modems',
      moreInfo: `Includes 4G, 4G LTE-A and 5G Wi-Fi dongles
      and routers, provides you much quicker Wi-Fi
      speed, meets your demand and simplify your 
      operation.`,
      img: './../../assets/image/NoPath2.png',
    },
    {
      name: 'Accessories',
      moreInfo: `Genuine, quality, and affordable phone ranging 
      from feature phones to low-end and high-end 
      smart phones.`,
      img: './../../assets/image/NoPath3.png',
    },
  ];
}
