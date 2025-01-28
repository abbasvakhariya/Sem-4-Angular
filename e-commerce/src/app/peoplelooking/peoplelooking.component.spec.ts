import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelookingComponent } from './peoplelooking.component';

describe('PeoplelookingComponent', () => {
  let component: PeoplelookingComponent;
  let fixture: ComponentFixture<PeoplelookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplelookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoplelookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
