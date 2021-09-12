import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../router/app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    SiderbarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    SiderbarComponent,
    NavComponent
  ]
})
export class SharedModule { }
