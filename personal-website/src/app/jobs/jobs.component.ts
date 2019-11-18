import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"]
})
export class JobsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPreviousSlide() {
    this.router.navigateByUrl("/intro");
  }

  goToNextSlide() {
    this.router.navigateByUrl("/projects");
  }
}
