import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDeatilsComponent } from './posts-deatils.component';

describe('PostsDeatilsComponent', () => {
  let component: PostsDeatilsComponent;
  let fixture: ComponentFixture<PostsDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
