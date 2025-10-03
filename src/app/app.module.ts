import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResitenciasComponent } from './formularios/resitencias/operacionesResistencias';
import { CalculadoraComponent } from './formularios/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroesFilterPipe,
    OperasBasComponent,
    CinepolisComponent,
    ResitenciasComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
