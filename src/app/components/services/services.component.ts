import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  myservices: any;

  constructor() {
    this.myservices = [
      {
        image: "",
        title: "Desktop Application",
        description: "I have been using more advanced programming concepts such as MVC, the Object-Oriented Programming (OOP) architecture, PHP, JavaScript & CSS FrameWork, and many other things …",
      },
      {
        image: "",
        title: "Mobile Application",
        description: "I have been using more advanced programming concepts such as MVC, the Object-Oriented Programming (OOP) architecture, PHP, JavaScript & CSS FrameWork, and many other things …",
      },
      {
        image: "",
        title: "A.I Application",
        description: "I have been using more advanced programming concepts such as MVC, the Object-Oriented Programming (OOP) architecture, PHP, JavaScript & CSS FrameWork, and many other things …",
      },
    ];
  }


}
