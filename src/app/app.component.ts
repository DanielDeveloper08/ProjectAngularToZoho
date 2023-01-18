import { Component } from '@angular/core';
import { CustomerI } from './interfaces/clientes.interface';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    customers: CustomerI[]=[];

    constructor(private _serviceCliente:ClienteService ){}
    ngOnInit(): void {
      this.getCustomers();
    }
    getCustomers(){
      this._serviceCliente
        .getCustomers()
        .subscribe( res => {
          this.customers = res.data;
        });
    }

}

