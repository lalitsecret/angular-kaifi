import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ColumnPipe} from './column.pipe'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,ColumnPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
