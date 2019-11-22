import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IntroComponent } from "./intro/intro.component";
import { ProjectsComponent } from "./projects/projects.component";
import { JobsComponent } from "./jobs/jobs.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "isRight" } },
  { path: "intro", component: IntroComponent, data: { animation: "isRight" } },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { animation: "isRight" }
  },
  { path: "jobs", component: JobsComponent, data: { animation: "isRight" } },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: "isRight" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
