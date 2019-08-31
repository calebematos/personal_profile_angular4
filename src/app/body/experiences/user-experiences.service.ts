import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "[Your experience here]",
    educations: [
      {
        schoolName: "Faculty of Technology and Sciences",
        startDate: "Feb/2006",
        endDate: "12/2009",
        degreeTitle: "Bachelor Degree in Systems Information",
        certificationDescription: "",
        location: "Jequié-Ba"
      }      
    ],
    careers: [
      {
        companyName: "Integritas",
        startDate: "Feb/2017",
        endDate: "actual",
        jobType: "Full Stack Developer",
        jobTitle: "[Your job's title here]",
        jobDuty: "[Your job's duty here]",
        location: "Work remotely",
        companyLink: "www.integritas.net/"
      },
      {
        companyName: "T-Systems",
        startDate: "Nov/2018",
        endDate: "Feb/2019",
        jobType: "Full Stack Developer",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "Blumenau-SC",
        companyLink: "www.t-systems.com"
      }
    ],
    certificates: [
      {
        certificateTitle: "Bachelor Degree",
        imageUrl: "./assets/Degree.png",
        url:"#certificates",
        target: ""
      },
      {
        certificateTitle: "Fullstack Angular and Spring",
        imageUrl: "./assets/fullstack.png",
        url: "https://www.algaworks.com/certs/0IWGHRIWC7/",
        target: "#"
      },
      {
        certificateTitle: "Web Design Responsive with HTML5, CSS3 and BEM",
        imageUrl: "/assets/Html5Css.png",
        url:"#certificates",
        target: ""
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
