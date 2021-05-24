import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {data} from './data'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products:any[]=data.products
  tags:any[]=data.tags
  tagname:string="men"
  col:string="id"
  order:boolean=true

  
  p1(str)
  {
    this.tagname=str
  }
}
