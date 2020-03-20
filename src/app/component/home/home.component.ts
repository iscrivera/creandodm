import { Component, OnInit } from '@angular/core';
import { messages, rules, positions } from 'src/app/constants/home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages = messages;
  rules = rules;
  positions = positions;
  constructor(
    private _router: Router
  ) { }


  ngOnInit(): void {
  }

  goToProfile() {
    this._router.navigate(['/profile']);
  }

  goToTicket() {
    this._router.navigate(['/ticket']);
  }

}
