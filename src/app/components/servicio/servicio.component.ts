import { Component, OnInit } from '@angular/core';
import { VillanosService } from 'src/app/services/villanos.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  compania: string;
  sitio: string;
  listaVillanos: any [] =[];

  constructor(private servicioVillanos: VillanosService) { }

  ngOnInit() {
    this.servicioVillanos.getResponseVillanos().subscribe((data) => {
      console.log(data);
      this.compania = data.compania;
      this.sitio = data.sitio;
      this.listaVillanos = data.ListasVillanos; 
    });
  }
}
