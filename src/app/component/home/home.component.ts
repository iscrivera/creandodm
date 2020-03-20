import { Component, OnInit } from '@angular/core';
import { messages, rules, positions } from 'src/app/constants/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages = messages;
  rules = rules;
  positions = positions;
  constructor() { }


  ngOnInit(): void {
  }

  login() {
    alert('login');
  }

}
