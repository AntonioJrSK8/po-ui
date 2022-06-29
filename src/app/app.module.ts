import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoFieldModule, PoModule, PoTableModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { EmployeeListComponent } from './comp/employee-list/employee-list.component';
import { EmployeeNewComponent } from './comp/employee-new/employee-new.component';
import { FormsModule } from '@angular/forms';
import { SalaryColorDirective } from './diretiva/salary-color.directive';
import { FuncionarioComponent } from './comp/funcionario/funcionario.component';
import { FuncionarioModalComponent } from './comp/funcionario-modal/funcionario-modal.component';
import { FuncionarioModalPouiComponent } from './comp/funcionario-modal-poui/funcionario-modal-poui.component';
import { AlertSuccessComponent } from './comp/alert-success/alert-success.component';
import { FuncionarioModalEditComponent } from './comp/funcionario-modal-edit/funcionario-modal-edit.component';
import { FuncionarioModalExclusaoComponent } from './comp/funcionario-modal-exclusao/funcionario-modal-exclusao.component';
import { MyCurrencyPipe } from './pipe/my-currency.pipe';
import { ModalComponent } from './comp/modal/modal.component';
import { InputDirective } from './diretiva/input.directive';
import { GetViewContainerDirective } from './diretiva/get-view-container.directive';
import { ComponenteDynamicComponent } from './comp/componente-dynamic/componente-dynamic.component';
import { ComponenteDynamic2Component } from './comp/componente-dynamic2/componente-dynamic2.component';
import { ModalDynamicComponent } from './comp/modal-dynamic/modal-dynamic/modal-dynamic.component';
import { ModalContentDirective } from './comp/modal-dynamic/modal-content.directive';
import { ModalTitleComponent } from './comp/modal-dynamic/modal-title/modal-title.component';
import { ModalBodyComponent } from './comp/modal-dynamic/modal-body/modal-body.component';
import { ModalFooterComponent } from './comp/modal-dynamic/modal-footer/modal-footer.component';
import { ModalTestComponent } from './comp/modal-dynamic/modal-test/modal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    FuncionarioComponent,
    FuncionarioModalComponent,
    FuncionarioModalPouiComponent,
    AlertSuccessComponent,
    FuncionarioModalEditComponent,
    FuncionarioModalExclusaoComponent,
    MyCurrencyPipe,
    ModalComponent,
    InputDirective,
    GetViewContainerDirective,
    ComponenteDynamicComponent,
    ComponenteDynamic2Component,
    ModalDynamicComponent,
    ModalContentDirective,
    ModalTitleComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoFieldModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    FormsModule,
    PoTableModule

  ],
  entryComponents:[
    ComponenteDynamicComponent,
    ModalTestComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
