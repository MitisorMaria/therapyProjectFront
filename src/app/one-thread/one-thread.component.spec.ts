import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneThreadComponent } from './one-thread.component';

describe('OneThreadComponent', () => {
  let component: OneThreadComponent;
  let fixture: ComponentFixture<OneThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
