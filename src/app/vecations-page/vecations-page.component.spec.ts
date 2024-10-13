import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecationsPageComponent } from './vecations-page.component';

describe('VecationsPageComponent', () => {
  let component: VecationsPageComponent;
  let fixture: ComponentFixture<VecationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VecationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VecationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
