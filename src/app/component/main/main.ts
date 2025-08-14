import { Component } from '@angular/core';
import { Botao } from '../botao/botao';

@Component({
  selector: 'app-main',
  imports: [Botao],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  typeWriter(text: string, id: string) {
    let i: number = 0;
    const el = document.getElementById(id);
    function write() {
      if (el && i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(write, 80);
      }
    }
    write();
  }

  ngAfterViewInit() {
    this.typeWriter('Frontend developer', 'typewriter');
  }
}
