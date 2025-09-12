import { Component } from '@angular/core';

@Component({//Decorador
  selector: 'app-root',//llamar a los componetes
  templateUrl: './app.component.html',//invocar al archivo
  standalone: false,//standalone 
  styleUrl: './app.component.css'//hace referencia a la hoja de estilos
})
export class AppComponent {
  title = 'Miguel Angel Rodriguez Frausto';


duplicarNumero(valor:number):number{
  return valor*2;
}

pelicula={
  titulo:"El pollon",
  anio:2252,
  genero:"Pornito"
}

}
