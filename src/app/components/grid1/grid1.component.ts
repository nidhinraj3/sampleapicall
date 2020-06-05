import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service1.service';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss','./tables.scss','./_tables.scss']
})
export class Grid1Component implements OnInit {

  constructor(private service:Service1Service) { }

  data = {};

  ngOnInit() {


    this.service.getdata().subscribe(s => {

      this.data = Object.assign({}, s);
      console.log(this.data);
    });   
    
    
  }



}
