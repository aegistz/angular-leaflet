import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBasemapComponent } from './layer-basemap.component';

describe('LayerBasemapComponent', () => {
  let component: LayerBasemapComponent;
  let fixture: ComponentFixture<LayerBasemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerBasemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerBasemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
