import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionalitiesComponent } from './components/functionalities/functionalities.component';
import { TasksComponent } from './components/tasks/tasks/tasks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/:id', component: FunctionalitiesComponent},
  {path: ':projects/:id/:functionalityId', component: TasksComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
