import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { PageService } from './page.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userInfo;
  public pageInfo;

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private projectService: ProjectsService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.pageInfo = this.pageService.getPageInfo();
    this.projectService.wakeupMyMoney();
    document.getElementById('body').style.backgroundImage = `url('${this.pageInfo['backgroundImage']}')` ;
  }
}
