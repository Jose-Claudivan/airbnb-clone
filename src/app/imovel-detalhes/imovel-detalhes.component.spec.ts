import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDetalhesComponent } from './imovel-detalhes.component';

describe('ImovelDetalhesComponent', () => {
  let component: ImovelDetalhesComponent;
  let fixture: ComponentFixture<ImovelDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
