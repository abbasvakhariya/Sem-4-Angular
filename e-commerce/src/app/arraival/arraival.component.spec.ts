import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraivalComponent } from './arraival.component';

describe('ArraivalComponent', () => {
  let component: ArraivalComponent;
  let fixture: ComponentFixture<ArraivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArraivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
