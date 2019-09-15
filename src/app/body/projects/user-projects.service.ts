import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  private projectsInfo = {
    myProjects: "Listed below are some personal projects I developed with technologies I was studying.",
    projects: [
      {
        projectTitle: "My Money",
        projectImageLink: "https://stevekeating.files.wordpress.com/2013/03/money.jpg",
        projectDescription: "Registration system of expenses and revenues. ",
        skillsList: "Java, Spring, Angular, MySql",
        projectLink: "https://musing-keller-3d6f52.netlify.com/"
      },
      {
        projectTitle: "Brewer",
        projectImageLink: "https://cdn.civitatis.com/belgica/bruselas/galeria/cerveza-belga.jpg",
        projectDescription: "Beer store.",
        skillsList: "Java, Spring, Thymeleaf, MySql",
        projectLink: "https://trunix-brewer.herokuapp.com/"
      }
    ]
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
