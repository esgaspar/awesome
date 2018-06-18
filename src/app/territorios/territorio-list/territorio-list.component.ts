import { Component, OnInit } from '@angular/core';

import { TerritorioService } from '../shared/territorio.service';
import { Territorio } from '../shared/territorio.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-territorio-list',
  templateUrl: './territorio-list.component.html',
  styleUrls: ['./territorio-list.component.css']
})
export class TerritorioListComponent implements OnInit {
  territorioList: Territorio[];
  constructor(private territorioService: TerritorioService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.territorioService.getData();
    x.snapshotChanges().subscribe(item => {
      this.territorioList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.territorioList.push(y as Territorio);
      });
    });
  }

  onEdit(emp: Territorio) {
    this.territorioService.selectedTerritorio = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.territorioService.deleteTerritorio(key);
      this.tostr.warning("Deleted Successfully", "Territorio register");
    }
  }

}