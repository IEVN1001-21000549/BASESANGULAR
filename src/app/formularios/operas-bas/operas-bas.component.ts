import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  operacion:string="";
  resul:string="";



  Calcular():void{
    switch(this.operacion){
      case 'sumar':
        this.resul=(parseInt(this.num1)+parseInt(this.num2)).toString();
        break;
      case 'restar':
        this.resul=(parseInt(this.num1)-parseInt(this.num2)).toString();
        break;
      case 'multiplicar':
        this.resul=(parseInt(this.num1)*parseInt(this.num2)).toString();
        break;
      case 'dividir':
        this.resul=(parseInt(this.num1)/parseInt(this.num2)).toString();
        break;
    }
    
  }

}
