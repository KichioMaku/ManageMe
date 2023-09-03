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

    showForm = false; // Control the visibility of the form
    project = {
      name: '',
      description: ''
    };

    private subscription: Subscription = new Subscription();
    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    }
    
    createProject() {
      this.project.description = '';
      this.project.name = '';
      this.showForm = true;
    }
  
    onSubmit() {
      console.log(this.project);
      this.showForm = false;
      this.projectService.createProject(new Project("0", this.project.name, this.project.description)).subscribe(() =>  this.getProjects());
    }
    cancel() {
      this.showForm = false;
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


