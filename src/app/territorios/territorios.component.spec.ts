import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoriosComponent } from './territorios.component';

describe('TerritoriosComponent', () => {
  let component: TerritoriosComponent;
  let fixture: ComponentFixture<TerritoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
