import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, profile, monthNames } from 'src/app/constants/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {


  user = user;
  profile = profile;
  now : string;
  constructor(
    private _router: Router
  ) { }

  ngAfterViewInit() {
    var coll = document.getElementsByClassName("collap-ticket");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  ngOnInit(): void {
    var today = new Date();
    var dd = today.getDate();
    var yyyy = today.getFullYear();
    var mm = monthNames[today.getMonth()];
    this.now = 'Al '+ dd +' de '+ mm + ' a las '+ today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }

  goToHome() {
    this._router.navigate(['/home']);
  }

  goToTicket() {
    this._router.navigate(['/ticket']);
  }
}
