import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [TopNavComponent, SideNavComponent,BottomNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    BottomNavComponent
  ]
})
export class NavModule { }
