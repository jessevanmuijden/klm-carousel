import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowsComponent } from './arrows.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ArrowsComponent', () => {
  let component: ArrowsComponent;
  let fixture: ComponentFixture<ArrowsComponent>;
  let leftArrowElement: DebugElement;
  let rightArrowElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsComponent);
    component = fixture.componentInstance;
    leftArrowElement = fixture.debugElement.query(By.css('.arrow-left'));
    rightArrowElement = fixture.debugElement.query(By.css('.arrow-right'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise onNavigated event when clicked', () => {
    let direction: string;
    component.onNavigated.subscribe((arrowDirection: string) => direction = arrowDirection);

    leftArrowElement.triggerEventHandler('click', null);
    expect(direction).toBe('backward');

    rightArrowElement.triggerEventHandler('click', null);
    expect(direction).toBe('forward');
  });
});
