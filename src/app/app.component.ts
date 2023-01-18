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
          console.log(this.customers)
        });
    }

    view: any[] = [700, 400];
  
    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;
    legendPosition: string = 'below';
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
    single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      },
        {
        "name": "UK",
        "value": 6200000
      }
    ];
  
  
    onSelect(data:any): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }
  
    onActivate(data:any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }
  
    onDeactivate(data:any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

}

