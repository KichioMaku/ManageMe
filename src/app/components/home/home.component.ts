import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { CONFIG } from 'src/app/config';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    projects : Project[] = [];
    private subscription: Subscription = new Subscription();
    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    }

    ngOnInit() {
      this.getJobs();
    }
  
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  
    getJobs(): void {
      this.projectService
      .getProjects(CONFIG.getProjects)
      .subscribe((result: Project[]) => (this.projects = result));
    }
}