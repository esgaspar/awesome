import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Territorio} from './territorio.model';
@Injectable()
export class TerritorioService {
  territorioList: AngularFireList<any>;
  selectedTerritorio: Territorio = new Territorio();
  constructor(public firebase :AngularFireDatabase ) { }

  getData(){
    this.territorioList = this.firebase.list('territorios');
    return this.territorioList;
  }

  insertTerritorio(territorio : Territorio)
  {
    this.territorioList.push({
      name: territorio.name,
      gps: territorio.gps,
      grupo: territorio.grupo,
      dataConclusao: territorio.dataConclusao
    });
  }

  updateTerritorio(territorio : Territorio){
    this.territorioList.update(territorio.$key,
      {
        name: territorio.name,
        gps: territorio.gps,
        grupo: territorio.grupo,
        dataConclusao: territorio.dataConclusao
      });
  }

  deleteTerritorio($key : string){
    this.territorioList.remove($key);
  }

}