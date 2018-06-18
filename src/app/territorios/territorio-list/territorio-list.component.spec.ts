import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorioListComponent } from './territorio-list.component';

describe('TerritorioListComponent', () => {
  let component: TerritorioListComponent;
  let fixture: ComponentFixture<TerritorioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritorioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
