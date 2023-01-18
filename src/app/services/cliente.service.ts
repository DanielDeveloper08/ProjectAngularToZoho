import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerI, GeneralResponseI } from '../interfaces/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  _url:string= "http://10.10.80.57:8090"
  constructor(private _http: HttpClient) { }

  getCustomers():Observable<GeneralResponseI<CustomerI[]>>{
    return this._http.get<GeneralResponseI<CustomerI[]>>(
      `${this._url}/api/cliente`
    );
  }
  
}
