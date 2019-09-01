import { UserProjectsService } from './../../user-projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projest-item',
  templateUrl: './projest-item.component.html',
  styleUrls: ['./projest-item.component.css']
})
export class ProjestItemComponent implements OnInit {

  public projects;

  constructor(private userProjectsService: UserProjectsService) { }

  ngOnInit() {
    this.projects = this.userProjectsService.getProjectsInfo().projects;
  }

}
