import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PoMenuItem, PoMenuComponent } from '@po-ui/ng-components';
import { GetViewContainerDirective } from './diretiva/get-view-container.directive';
import { ComponenteDynamicComponent } from './comp/componente-dynamic/componente-dynamic.component';
import { ComponenteDynamic2Component } from './comp/componente-dynamic2/componente-dynamic2.component';
import { ModalServiceService } from './comp/modal-dynamic/modal-service.service';
import { ModalTestComponent } from './comp/modal-dynamic/modal-test/modal-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(PoMenuComponent, { static: true }) menu!: PoMenuComponent;

  // @ViewChild('employeelista', {read: ViewContainerRef}) viewContainer!: ViewContainerRef

  @ViewChild('template') template!: TemplateRef<any>;

  @ViewChild(GetViewContainerDirective, {static: true}) getContainer!: GetViewContainerDirective;

  components = [ComponenteDynamicComponent, ComponenteDynamic2Component];
  indexComponents = -1;

  constructor(private modalService: ModalServiceService){}

  ngOnInit(): void {
    // this.menu.expand();
    // console.log(this.menu);

    // const viewConteiner = this.getContainer.viewContainerRef;
    // setInterval(()=>{
    //   viewConteiner.clear();
    //   this.indexComponents++;
    //   if(this.indexComponents === this.components.length){
    //     this.indexComponents = 0;
    //   }
    //   viewConteiner.createComponent<any>(this.components[this.indexComponents]);
    // }, 4000);

    this.modalService.open(ModalTestComponent);

  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon:'po-icon-warehouse', link:'/' },
    { label: 'Recursos Humanos', icon:'po-icon-waiter',
      subItems: [
        { label: 'Funcionário', link:'/funcionario'},
        { label: 'Funcionário2', link:'/lista'},
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


  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // this.viewContainer.createEmbeddedView(this.template);
    //const viewConteiner = this.getContainer.viewContainerRef;
    // viewConteiner.clear();
    // viewConteiner.createComponent<any>(ComponenteDynamicComponent);

    // Qaundo é usado com diretiva não é necessário utilizar ngAfterViewInit pode ser usado também ngOnInit
    // const viewConteiner = this.getContainer.viewContainerRef;
    // setInterval(()=>{
    //   viewConteiner.clear();
    //   this.indexComponents++;
    //   if(this.indexComponents === this.components.length){
    //     this.indexComponents = 0;
    //   }
    //   viewConteiner.createComponent<any>(this.components[this.indexComponents]);
    // }, 4000);

  }

}
