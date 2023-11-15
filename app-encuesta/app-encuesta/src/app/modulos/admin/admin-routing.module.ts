import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'encuesta', component:EncuestaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
