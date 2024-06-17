import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IframePartComponent } from './iframe-part.component';

describe('IframePartComponent', () => {
  let component: IframePartComponent;
  let fixture: ComponentFixture<IframePartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IframePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
