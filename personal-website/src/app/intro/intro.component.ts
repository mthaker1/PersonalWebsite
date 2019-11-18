import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPreviousSlide() {
    this.router.navigateByUrl("/");
  }

  goToNextSlide() {
    this.router.navigateByUrl("/jobs");
  }
}
