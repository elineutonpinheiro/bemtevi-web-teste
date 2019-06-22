import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Unidade', icon: 'pi pi-pw pi-file', routerLink: ['/Unidade']},
            {label: 'Turmas', icon: 'pi pi-pw pi-file', routerLink: ['/Unidade']},
            {label: 'Equipe', icon: 'pi pi-pw pi-file', routerLink: ['/Unidade']},
            {label: 'Alunos', icon: 'pi pi-pw pi-file', routerLink: ['/Unidade']},
            {label: 'Responsáveis', icon: 'pi pi-pw pi-file', routerLink: ['/Unidade']},
        ]
    }
}


