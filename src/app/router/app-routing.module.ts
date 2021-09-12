import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarritoComponent } from '../pagina/pages/carrito/carrito.component';
import { HomeComponent } from '../pagina/pages/home/home.component';
import { PrincipalComponent } from '../pagina/pages/principal/principal.component';
import { ProductoComponent } from '../pagina/pages/producto/producto.component';

/**
 * constante en donde se defines las rutas de cada componente que se tiene en la carpeta pages
 */
 const routes: Routes = [
  {
      path:'home',
      component: HomeComponent,
  },
  {
      path:'principal',
      component: PrincipalComponent,

  },
  {
      path:'carrito',
      component: CarritoComponent, 
  },  
  {
    path:'producto',
    component: ProductoComponent,
},
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
