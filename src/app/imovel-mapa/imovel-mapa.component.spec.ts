import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelMapaComponent } from './imovel-mapa.component';

describe('ImovelMapaComponent', () => {
  let component: ImovelMapaComponent;
  let fixture: ComponentFixture<ImovelMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
