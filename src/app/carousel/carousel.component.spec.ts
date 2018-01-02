import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideService } from '../slide.service';
import { By } from '@angular/platform-browser';
import { ArrowsComponent } from '../arrows/arrows.component';
import { PinsComponent } from '../pins/pins.component';
import { SlideComponent } from '../slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slide } from '../slide';
import Spy = jasmine.Spy;

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let slideService: SlideService;
  let spy: Spy;
  let slides = [
    {
      title: '236 bestemmingen',
      text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
      image: '/assets/images/soci1.png'
    },
    {
      title: '237 bestemmingen',
      text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
      image: '/assets/images/soci2.png'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarouselComponent,
        ArrowsComponent,
        PinsComponent,
        SlideComponent
      ],
      imports: [HttpClientModule],
      providers: [ SlideService ],
    });

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    slideService = fixture.debugElement.injector.get(SlideService);

    spy = spyOn(slideService, 'getSlides')
        .and.returnValue(Observable.of(slides).delay(10));

    de = fixture.debugElement.query(By.css('.carousel'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show slides before OnInit', () => {
    expect(de.queryAll(By.css('.slides app-slide')).length).toBe(0, 'Zero slides should be shown before OnInit');
    expect(spy.calls.any()).toBe(false, 'getSlides not yet called');
  });

  it('should still not show slides after component initialized', () => {
    fixture.detectChanges();
    expect(de.queryAll(By.css('.slides app-slide')).length).toBe(0, 'Zero slides should be shown after initialization');
    expect(spy.calls.any()).toBe(true, 'getSlides should have been called');
  });

  it('should show slides after getSlides promise (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(de.queryAll(By.css('.slides app-slide')).length).toBe(2, 'Two slides should be displayed');
    });
  }));

  it('should check if the carousel is moving forward', () => {
    expect(component.isMovingForward('forward')).toBeTruthy();
    expect(component.isMovingForward('backward')).toBeFalsy();
  });

  it('should check if the carousel is moving backward', () => {
    expect(component.isMovingBackward('backward')).toBeTruthy();
    expect(component.isMovingBackward('forward')).toBeFalsy();
  });

  it('should determine if a slide index equals the index of the currently active slide', () => {
    expect(component.isActive(0)).toBeTruthy();
    expect(component.isActive(1)).toBeFalsy();
    component.slideIndex = 1;
    expect(component.isActive(0)).toBeFalsy();
    expect(component.isActive(1)).toBeTruthy();
  });

  it('should determine if a slide index equals the index of the previously active slide', () => {
    expect(component.isPrevious(0)).toBeFalsy();
    expect(component.isPrevious(1)).toBeFalsy();
    component.previousSlideIndex = 1;
    expect(component.isPrevious(0)).toBeFalsy();
    expect(component.isPrevious(1)).toBeTruthy();
  });

  it('should calculate the next slide index', () => {
    component.slides = [
      new Slide(),
      new Slide(),
      new Slide()
    ];

    expect(component.nextSlide()).toEqual(1);
    component.slideIndex = 1;
    expect(component.nextSlide()).toEqual(2);
    component.slideIndex = 2;
    expect(component.nextSlide()).toEqual(0);
  });

  it('should calculate the previous slide index', () => {
    component.slides = [
      new Slide(),
      new Slide(),
      new Slide()
    ];

    expect(component.previousSlide()).toEqual(2);
    component.slideIndex = 1;
    expect(component.previousSlide()).toEqual(0);
    component.slideIndex = 2;
    expect(component.previousSlide()).toEqual(1);
  });

  it('should set a new slide index based on the direction of navigation', () => {
    component.selectSlide('forward');
    expect(component.slideIndex).toEqual(0, 'slideIndex should not be updated if slides are not yet defined');

    component.slides = [
      new Slide(),
      new Slide(),
      new Slide()
    ];

    component.selectSlide('forward');
    expect(component.slideIndex).toEqual(1);
    component.selectSlide('forward');
    expect(component.slideIndex).toEqual(2);
    component.selectSlide('forward');
    expect(component.slideIndex).toEqual(0);

    component.selectSlide('backward');
    expect(component.slideIndex).toEqual(2);
    component.selectSlide('backward');
    expect(component.slideIndex).toEqual(1);
    component.selectSlide('backward');
    expect(component.slideIndex).toEqual(0);
  });
});
