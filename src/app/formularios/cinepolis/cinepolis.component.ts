import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = "";
  Compradores: number = 1;
  tarjetaC: string = "no";
  boletos: number = 0;
  total: number = 0;
  mensajeError: string = "";
  precioBoleto: number = 12;

  calcular(): void {
    // Validar límite de boletos por comprador
    const minimoBole = 7;
    const boletosPerm = this.Compradores * minimoBole;
    
    if (this.boletos > boletosPerm) {
      this.mensajeError = `Error: Máximo ${minimoBole} boletos por comprador.`;
      this.total = 0;
      return;
    }

    this.mensajeError = "";
    
    // Calcular precio base
    this.total = this.boletos * this.precioBoleto;
    
    // Aplicar descuento por cantidad de boletos
    if (this.boletos > 5) {
      this.total *= 0.85; 
    } else if (this.boletos >= 3) {
      this.total *= 0.90; 
    }
    
    // Aplicar descuento adicional por tarjeta CINECO
    if (this.tarjetaC === "si") {
      this.total *= 0.90; 
    }
  }

  limpiar(): void {
    this.nombre = "";
    this.Compradores = 1;
    this.tarjetaC = "no";
    this.boletos = 0;
    this.total = 0;
    this.mensajeError = "";
  }

}


