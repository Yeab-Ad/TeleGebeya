import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  error: boolean = false;

  errorShow() {
    this.error = !this.error;
  }
}
