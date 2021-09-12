import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../router/app-routing.module';

import { PrincipalComponent } from './pages/principal/principal.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';

import { SharedModule } from '../shared/shared.module';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CarritoComponent,
    ProductoComponent,
    HomeComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    PrincipalComponent
  ]
})
export class PaginaModule { }
