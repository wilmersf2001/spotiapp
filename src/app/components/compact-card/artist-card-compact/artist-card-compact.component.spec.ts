import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCardCompactComponent } from './artist-card-compact.component';

describe('ArtistCardCompactComponent', () => {
  let component: ArtistCardCompactComponent;
  let fixture: ComponentFixture<ArtistCardCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistCardCompactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistCardCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
