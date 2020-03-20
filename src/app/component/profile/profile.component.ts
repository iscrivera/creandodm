import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, profile } from 'src/app/constants/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = user;
  profile = profile;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.initCollapsible();
  }

  initCollapsible(){
    var coll = document.getElementsByClassName("collap");
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

  goToHome() {
    this._router.navigate(['/home']);
  }
}
