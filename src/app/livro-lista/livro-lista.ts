import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.html',
  styleUrls: ['./livro-lista.css']
})
export class LivroListaComponent implements OnInit {

  livros = [
    { titulo: 'Angular Básico', autor: 'João', editora: 'TechBooks' }
  ];

  constructor() {}

  ngOnInit(): void {}

}
