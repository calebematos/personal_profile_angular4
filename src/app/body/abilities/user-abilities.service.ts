import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: "",
    abilities: [
      {
        title: "Languages",
        skills: [
          {
            name: "Java 8",
            proficiency: 5 //"[5 to 0]"
          },
          {
            name: "Javascript",
            proficiency: 4 //"[5 to 0]"
          }
        ],
      },
      {
        title: "Java Frameworks",
        skills: [
          {
            name: "Spring MVC",
            proficiency: 4
          },
          {
            name: "Spring Boot",
            proficiency: 4
          },
          {
            name: "Spring Data",
            proficiency: 4
          },
          {
            name: "Spring Cloud",
            proficiency: 4
          },
          {
            name: "JPA (Hibernate)",
            proficiency: 4
          },
          {
            name: "EJB",
            proficiency: 4
          }
        ],
      },
      {
        title: "Web Frameworks",
        skills: [
          {
            name: "Angular 6",
            proficiency: 4
          },
          {
            name: "Java Server Faces (JSF)",
            proficiency: 4
          },
          {
            name: "Java Server Pages (JSP)",
            proficiency: 4
          },
          {
            name: "Bootstrap",
            proficiency: 3
          },          
          {
            name: "Thymeleaf",
            proficiency: 3
          },
        ],
      },
      {
        title: "Web Services",
        skills: [
          {
            name: "Rest",
            proficiency: 5
          },
          {
            name: "SOAP",
            proficiency: 3
          }
        ],
      },
      {
        title: "Database",
        skills: [
          {
            name: "MySql",
            proficiency: 4
          },
          {
            name: "Oracle DB",
            proficiency: 4
          },
          {
            name: "PostGreSql",
            proficiency: 3
          },
          {
            name: "MongoDb",
            proficiency: 4
          }
        ],
      },
      {
        title: "Code Management",
        skills: [
          {
            name: "Git",
            proficiency: 5
          },
          {
            name: "SVN",
            proficiency: 4
          }
        ],
      },
      {
        title: "Unit Test Frameworks",
        skills: [
          {
            name: "Junit",
            proficiency: 4
          },
          {
            name: "Mockito",
            proficiency: 4
          },
          {
            name: "Sonar",
            proficiency: 3
          }
        ],
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
