import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon:'po-icon-warehouse', link:'/' },
    { label: 'Recursos Humanos', icon:'po-icon-waiter',
      subItems: [
        { label: 'Funcionário', link:'/funcionario'},
      ]
    },
    { label: 'Contratos', icon:'po-icon-layers', link:'/funcionario',
      subItems: [
        { label: 'Medições', link: 'http://trabalho.gov.br/' },
        { label: 'Aditivos', link: 'http://www.sindpd.com.br/' },
        { label: 'Saldos', link: 'http://www.sindpd.com.br/' },
      ]
    },
    { label: 'Outros', icon:'po-icon-settings', action: this.onClick.bind(this) },

  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
