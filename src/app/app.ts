import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Main } from './component/main/main';
import { InfoTecnologias } from './component/info-tecnologias/info-tecnologias';
import { Sobre } from './component/sobre/sobre';
import { CommonModule } from '@angular/common';
import { Contato } from './component/contato/contato';
import { Tecnologias } from './component/tecnologias/tecnologias';
import { Projetos } from './component/projetos/projetos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Header,
    Footer,
    Main,
    InfoTecnologias,
    Sobre,
    Contato,
    Tecnologias,
    Projetos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
  componentAtivo = 'sobre';
}
