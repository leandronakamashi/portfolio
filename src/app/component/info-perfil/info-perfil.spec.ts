import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPerfil } from './info-perfil';

describe('InfoPerfil', () => {
  let component: InfoPerfil;
  let fixture: ComponentFixture<InfoPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPerfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPerfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
