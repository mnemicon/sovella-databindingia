import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {
  userName = '';
  allowUserNameReset: boolean = false;

  constructor() { 
    if (this.userName.length > 0) {
      this.allowUserNameReset = true;
    }
  }

  ngOnInit(): void {
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = ''; 
  }

}
