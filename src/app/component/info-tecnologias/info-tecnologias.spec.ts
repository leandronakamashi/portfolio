import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTecnologias } from './info-tecnologias';

describe('InfoTecnologias', () => {
  let component: InfoTecnologias;
  let fixture: ComponentFixture<InfoTecnologias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTecnologias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTecnologias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
