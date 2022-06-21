import { ErrorService } from './../../Service/error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  constructor(public service: ErrorService) {}

  ngOnInit(): void {}
}
