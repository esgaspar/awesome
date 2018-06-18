import { Component, OnInit } from '@angular/core';
import { TerritorioService } from './shared/territorio.service'
@Component({
  selector: 'app-territorios',
  templateUrl: './territorios.component.html',
  styleUrls: ['./territorios.component.css'],
  providers: [TerritorioService]
})
export class TerritoriosComponent implements OnInit {

  constructor(private territorioService: TerritorioService) { }

  ngOnInit() {
  }

}
