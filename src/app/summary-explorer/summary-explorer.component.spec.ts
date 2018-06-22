import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryExplorerComponent } from './summary-explorer.component';

describe('SummaryExplorerComponent', () => {
  let component: SummaryExplorerComponent;
  let fixture: ComponentFixture<SummaryExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
