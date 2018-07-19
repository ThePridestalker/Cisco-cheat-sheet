import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  cards$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getRouter().subscribe(
      data => this.cards$ = data
    )
  }

}
