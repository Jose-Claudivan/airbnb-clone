import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelViewComponent } from './imovel-view.component';

describe('ImovelViewComponent', () => {
  let component: ImovelViewComponent;
  let fixture: ComponentFixture<ImovelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
