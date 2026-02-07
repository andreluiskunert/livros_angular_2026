import { Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'novo', component: CadastroComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];
