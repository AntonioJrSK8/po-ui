import { FuncionarioComponent } from "./comp/funcionario/funcionario.component";

export const rotas = [
    { path: 'funcionario', component: FuncionarioComponent },
    { path: '',   redirectTo: '/', pathMatch: 'full'}
];