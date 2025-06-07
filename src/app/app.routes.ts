import { Routes } from '@angular/router';
import { TeamRegistrationComponent } from './team-registration-component/team-registration-component.component';
import { TeamListComponent } from './team-list-component/team-list-component.component';
import { DrawComponent } from './draw-component/draw-component.component';

export const routes: Routes = [
  { path: 'cadastro', component: TeamRegistrationComponent },
  { path: 'lista', component: TeamListComponent },
  { path: 'sorteio', component: DrawComponent },
];