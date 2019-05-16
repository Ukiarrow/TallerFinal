import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable, observable } from 'rxjs';
import { VillanosResponse } from '../models/serviceResponse';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private readonly SERVICIO_URI = '/vector/servicios/villanos01';
  private endpoint;

  constructor(private http: HttpClient, private configServer: ConfigService) {
    this.endpoint = `${this.configServer.getHost()}${this.SERVICIO_URI}`;
   }

  getResponseVillanos(): Observable <VillanosResponse> {
    console.log("checkpoint0");
    return Observable.create((observer) => {
      const headers = {
        headers: new HttpHeaders({'Content-type': 'application/json'})
      };
      console.log("checkpte");
      this.http.post(this.endpoint, null, headers).subscribe(resp => {
        console.log("checkpoint1");
        if (resp['METADATA'].STATUS !== '0' || resp['DATA']['Servicio-01Response'].resultado !== 'OK'){
          observer.error('Error en respuesta de servicio');
          console.log("checkpoint0");
          observer.complete();
          return; 
        }
        const servicevillanos = resp['DATA']['Servicio-01Response'].Data;
        console.log("checkpoint2");
        observer.next(servicevillanos);
        observer.complete();
      }, (err) => {
        observer.error('Error de comunicación con servicio');
        observer.complete();
        console.log("checkpoint3");
        return;
      });
    });
   }
}
