import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHeaderComponent } from './album-header.component';

describe('AlbumHeaderComponent', () => {
  let component: AlbumHeaderComponent;
  let fixture: ComponentFixture<AlbumHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
