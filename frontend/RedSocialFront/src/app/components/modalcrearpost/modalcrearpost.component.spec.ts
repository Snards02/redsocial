import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcrearpostComponent } from './modalcrearpost.component';

describe('ModalcrearpostComponent', () => {
  let component: ModalcrearpostComponent;
  let fixture: ComponentFixture<ModalcrearpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalcrearpostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalcrearpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
