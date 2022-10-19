import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradoComponent } from './nao-encontrado.component';

describe('NaoEncontradoComponent', () => {
  let component: NaoEncontradoComponent;
  let fixture: ComponentFixture<NaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
