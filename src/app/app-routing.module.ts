import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FunctionalitiesComponent } from './components/functionalities/functionalities.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects/:id', component: FunctionalitiesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
