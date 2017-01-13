import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { PortfolioGrid } from 'app/portfolio.grid.component';
import { AboutComponent } from 'app/about.component';
import { CoursesComponent } from "app/courses.component";
import { CommonModule } from '@angular/common';

import "hammerjs"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioGrid,
    AboutComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
