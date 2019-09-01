import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  private projectsInfo = {
    myProjects: "[Your projects details here]",
    projects: [
      {
        projectTitle: "My Money",
        projectImageLink: "https://stevekeating.files.wordpress.com/2013/03/money.jpg",
        projectDescription: "Registration system of expenses and revenues. ",
        skillsList: "Java, Spring, Angular, MySql",
        projectLink: "https://musing-keller-3d6f52.netlify.com/"
      },
      // {
      //   projectTitle: "Brewer",
      //   projectImageLink: "https://opensource.com/sites/default/files/code4.png",
      //   projectDescription: "[Project description here]",
      //   skillsList: "[List of skills]",
      //   projectLink: "[Project link here]"
      // }
    ]
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
