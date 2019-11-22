import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPreviousSlide() {
    this.router.navigateByUrl("/jobs");
  }

  goToNextSlide() {
    this.router.navigateByUrl("/contact");
  }
}
