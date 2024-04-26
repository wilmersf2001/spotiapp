import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCardCompactComponent } from './playlist-card-compact.component';

describe('PlaylistCardCompactComponent', () => {
  let component: PlaylistCardCompactComponent;
  let fixture: ComponentFixture<PlaylistCardCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistCardCompactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistCardCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
