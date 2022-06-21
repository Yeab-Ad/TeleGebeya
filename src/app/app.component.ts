import { ErrorService } from './Service/error.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TeleGebeya';

  constructor(public service: ErrorService) {}
}
