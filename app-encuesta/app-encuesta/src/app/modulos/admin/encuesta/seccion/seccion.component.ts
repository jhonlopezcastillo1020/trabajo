import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.sass']
})
export class SeccionComponent implements OnInit {

  preguntas: any[] = [];
  seccions: any[] = [];
  preguntaSeleccionada = null;


  @Output() evento = new EventEmitter

  ngOnInit() {
    this.seccions = [
      { id: '1', texto: 'seccion 1' },
      { id: '2', texto: 'seccion 2' },
      { id: '3', texto: 'seccion 3' },
      { id: '4', texto: 'seccion 4' },
      { id: '5', texto: 'seccion 5' },
      { id: '6', texto: 'seccion 6' },
      { id: '7', texto: 'seccion 7' },
      { id: '8', texto: 'seccion 8' },

    ]
  



    this.preguntas = [
      { id: '1', texto: 'pregunta 1', seccion_id: '1', tipo: 'texto' },
      { id: '2', texto: 'pregunta 2', seccion_id: '1', tipo: 'seleccion' },
      { id: '3', texto: 'pregunta 3', seccion_id: '2', tipo: 'multiple' },
      { id: '4', texto: 'pregunta 4', seccion_id: '2', tipo: 'unica' },

    ]

  }

  onPregunta(pregunta: any) {
    this.evento.emit(pregunta);
    this.preguntaSeleccionada = pregunta;

  }

}
