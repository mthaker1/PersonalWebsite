import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPreviousSlide() {
    this.router.navigateByUrl("/projects");
  }

  goToNextSlide() {
    this.router.navigateByUrl("/contact");
  }
}
