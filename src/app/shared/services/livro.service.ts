import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: any[] = [];

  listar() {
    return this.livros;
  }

  adicionar(livro: any) {
    this.livros.push(livro);
  }

  excluir(i: number) {
    this.livros.splice(i, 1);
  }
}
