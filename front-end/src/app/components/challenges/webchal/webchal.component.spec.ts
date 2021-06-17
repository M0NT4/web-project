import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebchalComponent } from './webchal.component';

describe('WebchalComponent', () => {
  let component: WebchalComponent;
  let fixture: ComponentFixture<WebchalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebchalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebchalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
