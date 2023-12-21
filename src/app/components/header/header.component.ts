import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener} from '@angular/core';

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

  //Nos permite capturar el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWidth();
  }

  ngOnInit() {
    this.checkWidth();
  }

  //Verificar el tamaño actual de la pantalla
  private checkWidth() {
    const screenWidth = window.innerWidth;

    // Definimos el valor de la pantalla en reponsive
    this.isResponsive = screenWidth <= 768;
  }

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
