import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  items: string[]=[];
  constructor() { }

  

  ngOnInit():void{
    this.items = [
      
    ];
  }

}
