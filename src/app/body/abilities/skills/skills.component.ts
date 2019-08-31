import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "../user-abilities.service";
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public userInfo;
  private userAbilitiesInfo;
  private arraylength;
  public skillsList1 = [];
  public skillsList2 = [];
  public finalList = [];

  constructor(private userService: UserService, private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.finalList = this.userAbilitiesInfo['abilities'];
    console.log(this.finalList);
    
  }

}
