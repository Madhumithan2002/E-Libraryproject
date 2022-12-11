import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  constructor() { }
  userlog: boolean = false;
  logad() {
    var addadim = localStorage.getItem('UserName');

    if (addadim == 'madhumithan') {
      this.userlog = true;
      return true;
    }
    else {
      this.userlog = false;
      return false;
    }

  }
}
