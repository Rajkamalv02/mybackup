import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdisplayComponent } from './projectdisplay.component';

describe('ProjectdisplayComponent', () => {
  let component: ProjectdisplayComponent;
  let fixture: ComponentFixture<ProjectdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
