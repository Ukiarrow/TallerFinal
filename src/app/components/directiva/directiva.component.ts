import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import localeEsCL from '@angular/common/locales/es-CL';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  hora: any;
  dia: string;
  mes: string;
  ano: string;
  dia_semana: string;

  constructor() {
   }

  ngOnInit() {
    this.hora = Date.now();
  }

}
