import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { SeccionComponent } from './encuesta/seccion/seccion.component';
import { PreguntaComponent } from './encuesta/pregunta/pregunta.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
    EncuestaComponent,
    SeccionComponent,
    PreguntaComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
