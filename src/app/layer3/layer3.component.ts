import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-layer3',
  templateUrl: './layer3.component.html',
  styleUrls: ['./layer3.component.css']
})
export class Layer3Component implements OnInit {

  cards$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getLayer3Switch().subscribe(
      data => this.cards$ = data
    )
  }

}
