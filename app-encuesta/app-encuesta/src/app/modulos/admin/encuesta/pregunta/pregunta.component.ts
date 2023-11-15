import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.sass']
})
export class PreguntaComponent  {

  @Input() pregunta: any;


}
