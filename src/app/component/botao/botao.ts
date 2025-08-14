import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss',
})
export class Botao {
  @Input() link: string = '';
  @Input() btName: string = '';
}
