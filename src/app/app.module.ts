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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    FuncionarioComponent,
    FuncionarioModalComponent,
    FuncionarioModalPouiComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
