import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-social-accounts',
  templateUrl: './social-accounts.component.html',
  styleUrls: ['./social-accounts.component.css']
})
export class SocialAccountsComponent implements OnInit {
  public userInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
  }

}
