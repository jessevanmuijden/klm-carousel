import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PinsComponent } from './pins.component';
import { DebugElement } from '@angular/core';
import { Slide } from '../slide';
import { By } from '@angular/platform-browser';

describe('PinsComponent', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;
  let pinsElements: DebugElement[];
  let slide1: Slide;
  let slide2: Slide;
  let slides: Slide[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;

    slide1 = new Slide();
    slide1.title = 'KLM';
    slide1.text = 'Vliegtuig';
    slide1.image = 'boeing.png';

    slide2 = new Slide();
    slide2.title = 'Air France';
    slide2.text = 'Fokker';
    slide2.image = 'kist.png';

    slides = [
      slide1,
      slide2
    ];

    component.slides = slides;
    component.selectedIndex = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an active pin', () => {
    const pinElements = fixture.debugElement.queryAll(By.css('.pin'));
    expect(pinElements.length).toEqual(2, 'There should be a pin for every slide');
    expect(pinElements[0].nativeElement.classList.contains('active')).toBeTruthy();
    expect(pinElements[1].nativeElement.classList.contains('active')).toBeFalsy();
  });

  it('should set the active pin based on the select slide index', () => {
    component.selectedIndex = 1;
    fixture.detectChanges();

    const pinElements = fixture.debugElement.queryAll(By.css('.pin'));
    expect(pinElements[0].nativeElement.classList.contains('active')).toBeFalsy();
    expect(pinElements[1].nativeElement.classList.contains('active')).toBeTruthy();
  });
});
