import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    editForms: { [key: string]: FormGroup } = {};
    private subscription: Subscription = new Subscription();
    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    }

    ngOnInit() {
      this.getProjects();
    }
  
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  
    getProjects(): void {
      this.projectService
      .getProjects(CONFIG.getProjects)
      .subscribe((result: Project[]) => (this.projects = result));
    }

    createProject() {
      const newProject = {
        name: 'New Project',
        description: 'New project description',
        projectId: "0"
      };
      
      this.projectService.createProject(newProject).subscribe(() => {
        this.getProjects();
      });
    }
  
    deleteProject(projectId: string, projectName: string): void {
      console.log("button was clicked!")
      const confirmation = window.confirm(`You sure you want to delete ${projectName} project?`);

      if (confirmation) {
        this.projectService.deleteProject(projectId).subscribe(() =>  this.getProjects());
        console.log("Delete project confirmed")
      } else {
        console.log("Delete project not confirmed")
      }
    }
  }


