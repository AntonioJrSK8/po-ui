import { EmployeeListComponent } from "./comp/employee-list/employee-list.component";
import { FuncionarioComponent } from "./comp/funcionario/funcionario.component";
import { EmployeeNewComponent } from './comp/employee-new/employee-new.component';

export const rotas = [
    { path: 'funcionario', component: FuncionarioComponent },
    { path: 'lista', component: EmployeeListComponent },
    { path: '',   redirectTo: '/', pathMatch: 'full'}
];
