import { Component } from '@angular/core';
import { SidebarService } from 'src/app/servicios/sidebar.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.sass']
})
export class EncuestaComponent {
  isCollapsed: boolean = false;
  pregunta:any

  constructor(public sidebarService: SidebarService) {}



  onPregunta(item:any){

    this.pregunta=item
    
  }

}
