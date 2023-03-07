/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SeachComponent } from './search.component';

describe('PatientsSeachComponent', () => {
  let component: SeachComponent;
  let fixture: ComponentFixture<SeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
