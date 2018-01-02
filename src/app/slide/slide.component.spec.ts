import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideComponent } from './slide.component';
import { Slide } from '../slide';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SlideComponent', () => {
  let component: SlideComponent;
  let fixture: ComponentFixture<SlideComponent>;
  let expectedSlide: Slide;
  let imageElement: DebugElement;
  let textContainerElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideComponent);
    component = fixture.componentInstance;
    imageElement = fixture.debugElement.query(By.css('img'));
    textContainerElement = fixture.debugElement.query(By.css('.text-container-inner'));

    expectedSlide = new Slide();
    expectedSlide.title = 'KLM';
    expectedSlide.text = 'Vliegtuig';
    expectedSlide.image = 'boeing.png';

    component.slide = expectedSlide;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an image, title and text', () => {
    expect(imageElement.nativeElement.getAttribute('src')).toEqual('boeing.png');
    expect(textContainerElement.query(By.css('h2')).nativeElement.textContent).toContain('KLM');
    expect(textContainerElement.query(By.css('.slide-text')).nativeElement.textContent).toContain('Vliegtuig');
  });
});
