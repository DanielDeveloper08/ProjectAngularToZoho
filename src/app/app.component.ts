import { Component } from '@angular/core';
import { CustomerI } from './interfaces/clientes.interface';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  customers: CustomerI[] = [];

  constructor(private _serviceCliente: ClienteService) { }
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this._serviceCliente
      .getCustomers()
      .subscribe(res => {
        this.customers = res.data;
        console.log(this.customers)
      });
  }

  view: [number, number] = [500, 300];

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
      "name": "Arturo",
      "value": 8940000
    },
    {
      "name": "Josue",
      "value": 5000000
    },
    {
      "name": "Daniel",
      "value": 7200000
    },
    {
      "name": "Demetrio",
      "value": 6200000
    },
    {
      "name": "Roberto",
      "value": 7895214
    }
  ];


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  // bar-horizontal
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Meses';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Ventas';

  data = [
    {
      "name": "Enero",
      "value": 120354
    },
    {
      "name": "Febrero",
      "value": 524125
    },
    {
      "name": "Marzo",
      "value": 896524
    },
    {
      "name": "Abril",
      "value": 985412
    },
    {
      "name": "Mayo",
      "value": 854125
    },
    {
      "name": "Junio",
      "value": 965241
    },
    {
      "name": "Julio",
      "value": 125456
    },
    {
      "name": "Agosto",
      "value": 458745
    },
    {
      "name": "Septiembre",
      "value": 254125
    },
    {
      "name": "Octubre",
      "value": 854854
    },
    {
      "name": "Noviembre",
      "value": 556688
    },
    {
      "name": "Diciembre",
      "value": 784596
    }
  ];
  //Pie chart
  paises = [
    {
      "name": "Estados Unidos",
      "value": 8940000
    },
    {
      "name": "Rusia",
      "value": 5000000
    },
    {
      "name": "Nueva Zelanda",
      "value": 7200000
    },
    {
      "name": "Ecuador",
      "value": 6200000
    },
    {
      "name": "Colombia",
      "value": 7895214
    }
  ];


  //CARD
  cardColor: string = '#5AA454';

  //area chart
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabelData:string = "Años"

  timeline: boolean = true;

  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2020",
          "value": 62000000
        },
        {
          "name": "2021",
          "value": 73000000
        },
        {
          "name": "2022",
          "value": 89400000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2020",
          "value": 250000000
        },
        {
          "name": "2021",
          "value": 309000000
        },
        {
          "name": "2022",
          "value": 311000000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2020",
          "value": 58000000
        },
        {
          "name": "2021",
          "value": 50000020
        },
        {
          "name": "2022",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "2020",
          "value": 57000000
        },
        {
          "name": "2021",
          "value": 62000000
        }
      ]
    }
  ];


}

