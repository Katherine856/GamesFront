import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isResponsive: boolean=false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWidth();
  }

  ngOnInit() {
    this.checkWidth();
  }

  private checkWidth() {
    const screenWidth = window.innerWidth;

    // Puedes ajustar el valor de 768 según tu definición de "responsive"
    this.isResponsive = screenWidth <= 768;

  }
}
