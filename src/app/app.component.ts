import { Component, OnInit} from '@angular/core';
import { POEMS } from '../data/poems';
import { setTheme } from 'ngx-bootstrap/utils';
import {TooltipPosition} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  poems:Array<any> = POEMS;

  constructor(){
  	setTheme("bs3");
  }

  ngOnInit(){
  	console.dir(this.poems);
  }
}
