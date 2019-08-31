import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Lucas Calebe Matos Lopes",
    jobTitle: "Full Stack Developer",
    aboutMe: `
    I'm a Senior Full Stack Developer with over 5 years of experience developing software with high standards and interacting with multiple 
    stakeholders from technical and non-technical backgrounds, ensuring clarity, quality, and continuous delivery. 
    I work with technologies such as Java, Hibernate, SQL, Oracle Databases. I am committed to work and willing to help. 
    Bachelor's Degree in Information Systems.I love develop and study  software development.
   `,
    profilePicture: "./assets/profile.jpg",
    location: "Brazil",
    email: "calebematos@gmail.com",
    devpostAccount: "",
    facebookAccount: "facebook.com/calebe.matos.5",
    githubAccount: "github.com/calebematos",
    googleAccount: "",
    linkedinAccount: "linkedin.com/in/calebematos/en",
    twitterAccount: "twitter.com/calebematos",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
