import { Injectable } from '@angular/core';

export interface Livro {
  titulo: string;
  autor: string;
  editora: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[] = [];

  listar() {
    return this.livros;
  }

  adicionar(livro: Livro) {
    this.livros.push(livro);
  }

  excluir(index: number) {
    this.livros.splice(index, 1);
  }
}
