import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertaisComponent } from './advertais.component';

describe('AdvertaisComponent', () => {
  let component: AdvertaisComponent;
  let fixture: ComponentFixture<AdvertaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
