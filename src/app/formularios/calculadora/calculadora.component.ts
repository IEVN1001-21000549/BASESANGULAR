import { Component } from '@angular/core';
import { Calculadora1Component } from './calculadora1.component';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})

export class CalculadoraComponent {

  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  resultado: number = 0;

  calcular(): void {
    const distancia = new Calculadora1Component(this.x1, this.y1, this.x2, this.y2);
    this.resultado = distancia.calcularDistancia();
  }

}
