import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';



@NgModule({
  declarations: [NavComponent, NavToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class NavModule { }
