import { Component, ElementRef, Injector, OnInit, ViewChild, ComponentFactoryResolver, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ModalContentDirective } from './../modal-content.directive';
import { ModalRefService } from './../modal-ref.service';

declare const $: any;

@Component({
  selector: 'app-modal-dynamic',
  template: `
    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <ng-template modalContent></ng-template>

        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective , {static: true }) modalContentDirective!: ModalContentDirective;

  modalRef!: ModalRefService;

  // onShow: EventEmitter<any> = new EventEmitter();
  // onHide:   EventEmitter<any> = new EventEmitter();
  onShow: ReplaySubject<any> = new ReplaySubject();
  onHide: ReplaySubject<any> = new ReplaySubject();
  

  showEventoData = null;
  hideEventoData = null;

  constructor(private element: ElementRef,
              private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   $(this.getDivModal).on('hidden.bs.modal', (e:any) => {
    //     this.onHide.next({
    //       event: e,
    //       data: this.hideEventoData
    //     });
    //   });
    // }, 1);
    
    // setTimeout(() => {
    //   $(this.getDivModal).on('shown.bs.modal',(e:any)=>{
    //     this.onShow.next({
    //       event: e,
    //       data: this.showEventoData
    //     });
    //   })
    // }, 1);
  }

  mount(modalImplementedComponent: any): ModalRefService {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(modalImplementedComponent);
    const viewContainerRef = this.modalContentDirective.viewContainerRef;
    viewContainerRef.createComponent(componentFactory, undefined, this.makeLocalInjector());

    return this.modalRef;
  }

  private makeLocalInjector(){
    return Injector.create({
      providers: [
          {provide: ModalRefService, useValue: this.makeModalRef()}
      ],
      parent: this.injector
    });
  }

  private makeModalRef() {
    // construindo instancia local
    this.modalRef = new ModalRefService();
    this.modalRef.instance = this;
    return this.modalRef;
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(modalImplementedComponent);
    // const viewContainerRef = this.modalContentDirective.viewContainerRef;
    // viewContainerRef.createComponent(componentFactory);
    // const modalContent = this.modalContentDirective.viewContainerRef;
    // modalContent.clear();
    // modalContent.createComponent<any>(modalImplementedComponent);
  }

  show(event = null){
    // const divModal = this.getDivModal();/
    this.registerEvents()
    this.showEventoData = event;
    $(this.getDivModal).modal('show');
  }

  hide(event = null){
    // const divModal = this.getDivModal();
    this.hideEventoData = event;
    $(this.getDivModal).modal('hide');
  }

  get getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }
 
  private registerEvents() {
    
      $(this.getDivModal).on('hidden.bs.modal', (e:any) => {
        this.onHide.next({
          event: e,
          data: this.hideEventoData
        });
      });
    
      $(this.getDivModal).on('shown.bs.modal',(e:any)=>{
        this.onShow.next({
          event: e,
          data: this.showEventoData
        });
      })
    
  }
}
