import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
/* import { Observable } from 'rxjs'; */

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  cards$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getSwitch().subscribe(
      data => this.cards$ = data
    );
    
  }

}
