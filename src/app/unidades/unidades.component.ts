import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

    rangeDates: Date[];

    unidades = [
      {codigo: '01', nome: 'Vovó Francisca', endereco: 'Rua Adão', contato: '3224-1201'},
      {codigo: '02', nome: 'Vovó Francisca', endereco: 'Rua Adão', contato: '3224-1201'},
      {codigo: '03', nome: 'Vovó Francisca', endereco: 'Rua Adão', contato: '3224-1201'},
      {codigo: '04', nome: 'Vovó Francisca', endereco: 'Rua Adão', contato: '3224-1201'},
      {codigo: '05', nome: 'Vovó Francisca', endereco: 'Rua Adão', contato: '3224-1201'}
    ];

  constructor() { }

  ngOnInit() {



  }

}
