import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';   // 👈 IMPORTANTE
import { LivroService } from '../../shared/services/livro.service';

@Component({
  selector: 'app-livro-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './livro-cadastro.html'
})
export class LivroCadastro {

  livro = {
    titulo: '',
    autor: '',
    editora: ''
  };

  constructor(private service: LivroService) {}

  salvar() {
    this.service.adicionar(this.livro);

    this.livro = {
      titulo: '',
      autor: '',
      editora: ''
    };
  }
}
