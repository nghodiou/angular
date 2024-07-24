import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsPasseOblierComponent } from './mots-passe-oblier.component';

describe('MotsPasseOblierComponent', () => {
  let component: MotsPasseOblierComponent;
  let fixture: ComponentFixture<MotsPasseOblierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotsPasseOblierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotsPasseOblierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
