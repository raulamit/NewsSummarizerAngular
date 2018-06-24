import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseEditorComponent } from './advertise-editor.component';

describe('AdvertiseEditorComponent', () => {
  let component: AdvertiseEditorComponent;
  let fixture: ComponentFixture<AdvertiseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
