import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/Service/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(public service:ErrorService) { }

  ngOnInit(): void {
  }

}
