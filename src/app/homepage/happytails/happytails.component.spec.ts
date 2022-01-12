import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappytailsComponent } from './happytails.component';

describe('HappytailsComponent', () => {
  let component: HappytailsComponent;
  let fixture: ComponentFixture<HappytailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappytailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappytailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
