import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { TerritorioService } from '../shared/territorio.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-territorio',
  templateUrl: './territorio.component.html',
  styleUrls: ['./territorio.component.css']
})
export class TerritorioComponent implements OnInit {

  constructor(private territorioService: TerritorioService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(territorioForm: NgForm) {
    if (territorioForm.value.$key == null)
      this.territorioService.insertTerritorio(territorioForm.value);
    else
      this.territorioService.updateTerritorio(territorioForm.value);
    this.resetForm(territorioForm);
    this.tostr.success('Submitted Succcessfully', 'Territorio Register');
  }

  resetForm(territorioForm?: NgForm) {
    if (territorioForm != null)
      territorioForm.reset();
    this.territorioService.selectedTerritorio = {
      $key: null,
      name: "",
      gps: "",
      grupo: "",
      dataConclusao: null
    }
  }

}