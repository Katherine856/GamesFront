import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isResponsive: boolean=false;
  search: string = '';

  @Output() stringEnviado = new EventEmitter<string>(); //Se declara el envio del valor del input de busqueda

  constructor() {}

  // Accede al valor del input utilizando el evento
  onInputChange(event: Event){
    this.search = (event.target as HTMLInputElement).value;
    this.emitirString();
  }

  // Enviar el valor del input al home
  emitirString(){
    this.stringEnviado.emit(this.search);
  }
  
}
