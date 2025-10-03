import { Component } from '@angular/core';
import { ResistenciasOP } from './resitencias.component';

@Component({
  selector: 'app-resitencias',
  standalone: false,
  templateUrl: './resitencias.component.html',
  styleUrl: './resitencias.component.css'
})
export class ResitenciasComponent {

 // Creamos una instancia del modelo (variables)
  model: ResistenciasOP = new ResistenciasOP();

  // Método para obtener la clase CSS del color (lógica)
  getColorClass(valor: string): string {
    const colorMap: {[key: string]: string} = {
      // Para banda 1 y 2 (dígitos)
      '0': 'color-negro',
      '1': 'color-marron', 
      '2': 'color-rojo',
      '3': 'color-naranja',
      '4': 'color-amarillo',
      '5': 'color-verde',
      '6': 'color-azul',
      '7': 'color-violeta',
      '8': 'color-gris',
      '9': 'color-blanco',
      
      // Para banda 3 (multiplicador)
      '10': 'color-marron',
      '100': 'color-rojo',
      '1000': 'color-naranja', 
      '10000': 'color-amarillo',
      '100000': 'color-verde',
      '1000000': 'color-azul',
      '10000000': 'color-violeta',
      '0.1': 'color-oro',
      '0.01': 'color-plata',
      
      // Para banda 4 (tolerancia)
      '5-': 'color-oro',
      '10-': 'color-plata'
    };
    
    return colorMap[valor] || 'color-gris';
  }

  // Método principal 
  calcular(): void {
    // Validar que todas las bandas estén seleccionadas
    if (!this.model.banda1 || !this.model.banda2 || !this.model.banda3 || !this.model.banda4) {
      alert('Por favor, selecciona todas las bandas');
      return;
    }

    // Convertir valores
    const digito1 = parseInt(this.model.banda1);
    const digito2 = parseInt(this.model.banda2);
    const multiplicador = parseFloat(this.model.banda3);
    this.model.tolerancia = parseFloat(this.model.banda4);

    // Calcular valor 
    const valorBase = (digito1 * 10) + digito2;
    this.model.valorNominal = valorBase * multiplicador;

    // Calcular valores mínimo y máximo
    const tolerancia = this.model.tolerancia / 100;
    const variacion = this.model.valorNominal * tolerancia;
    
    this.model.valorMinimo = this.model.valorNominal - variacion;
    this.model.valorMaximo = this.model.valorNominal + variacion;
  }

  
  }

