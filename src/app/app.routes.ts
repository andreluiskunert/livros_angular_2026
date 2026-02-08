import { Routes } from '@angular/router';
import { LivroCadastro } from './features/livro-cadastro/livro-cadastro';
import { LivroListaComponent } from './features/livro-lista/livro-lista';

export const routes: Routes = [
  { path: 'novo', component: LivroCadastro },
  { path: 'lista', component: LivroListaComponent },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];
