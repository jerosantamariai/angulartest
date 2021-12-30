import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IindicadorUf } from '../interfaces/IindicadorUf';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(private http: HttpClient) { 
    
  }

  getIndicadores() {
    return this.http.get('https://mindicador.cl/api');
  }

  // observable es una fx de angular para hacer la conversion
  // la interfaz formatea la respuestal del get en lo que yo quiero
  getUf(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/uf');
  }
  getIvp(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/ivp');
  }
  getDolar(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/dolar');
  }
  getDolarIntercambio(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/dolar_intercambio');
  }
  getEuro(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/euro');
  }
  getIpc(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/ipc');
  }
  getUtm(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/utm');
  }
  getImacec(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/imacec');
  }
  getTpm(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/tpm');
  }
  getLibraCobre(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/libra_cobre');
  }
  getTasaDesempleo(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/tasa_desempleo');
  }
  getBitcoin(): Observable <IindicadorUf> {
    return this.http.get<IindicadorUf> ('https://mindicador.cl/api/bitcoin');
  }
  
}
