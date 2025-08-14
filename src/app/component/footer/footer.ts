import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Output() sobreClick = new EventEmitter<void>();
  @Output() tecnologiasClick = new EventEmitter<void>();
  @Output() projetosClick = new EventEmitter<void>();
  @Output() contatoClick = new EventEmitter<void>();

  onSobreClick() {
    this.sobreClick.emit();
    console.log('Sobre clicked');
  }
  onTecnologiasClick() {
    this.tecnologiasClick.emit();
    console.log('Tecnologias clicked');
  }
  onProjetosClick() {
    this.projetosClick.emit();
    console.log('Projetos clicked');
  }
  onContatoClick() {
    this.contatoClick.emit();
    console.log('Contato clicked');
  }
}
