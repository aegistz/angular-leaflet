import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGuideComponent } from './start-guide.component';

describe('StartGuideComponent', () => {
  let component: StartGuideComponent;
  let fixture: ComponentFixture<StartGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
