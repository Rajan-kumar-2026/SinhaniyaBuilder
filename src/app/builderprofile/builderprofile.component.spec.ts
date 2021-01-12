import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderprofileComponent } from './builderprofile.component';

describe('BuilderprofileComponent', () => {
  let component: BuilderprofileComponent;
  let fixture: ComponentFixture<BuilderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
