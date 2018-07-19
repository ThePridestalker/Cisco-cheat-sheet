import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vlan',
  templateUrl: './vlan.component.html',
  styleUrls: ['./vlan.component.css']
})
export class VlanComponent implements OnInit {

  cards$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getVLAN().subscribe(
      data => this.cards$ = data
    )
  }

}
