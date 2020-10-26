import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ]
})
export class LayoutModule { }
