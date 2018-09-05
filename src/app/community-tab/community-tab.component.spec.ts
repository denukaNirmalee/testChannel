import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTabComponent } from './community-tab.component';

describe('CommunityTabComponent', () => {
  let component: CommunityTabComponent;
  let fixture: ComponentFixture<CommunityTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
