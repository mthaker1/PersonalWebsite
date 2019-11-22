import { Component, OnInit } from "@angular/core";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  faCube = faCube;
  faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToNextSlide() {
    this.router.navigateByUrl("/intro");
  }
}
