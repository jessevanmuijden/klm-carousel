import { AppPage } from './app.po';
import {browser} from "protractor";

describe('angular-carousel app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have slides and pins', () => {
    let expected = 5;
    page.navigateTo();
    expect(page.getNumberOfSlides()).toEqual(expected);
    expect(page.getNumberOfPins()).toEqual(expected);
  });

  it('should display slide content', () => {
    page.navigateTo();
    expect(page.getActiveSlideTitle()).toBe('236 bestemmingen');
    expect(page.getActiveSlideText()).toContain('Zoek op budget');
    expect(page.getActiveSlideImageSource()).toContain('soci1.png');
  });

  it('should navigate to the next slide', () => {
    page.navigateTo();
    expect(page.getActiveSlideAtIndex(1)).toBeTruthy();
    expect(page.getActiveSlideAtIndex(2)).toBeFalsy();
    page.getRightArrow().click();
    expect(page.getActiveSlideAtIndex(1)).toBeFalsy();
    expect(page.getActiveSlideAtIndex(2)).toBeTruthy();
  });

  it('should navigate to the previous slide', () => {
    page.navigateTo();
    expect(page.getActiveSlideAtIndex(1)).toBeTruthy();
    expect(page.getActiveSlideAtIndex(2)).toBeFalsy();
    page.getLeftArrow().click();
    expect(page.getActiveSlideAtIndex(1)).toBeFalsy();
    expect(page.getActiveSlideAtIndex(5)).toBeTruthy();
  });

  it('should display a pin as active corresponding to the selected slide index', () => {
    page.navigateTo();
    expect(page.getActivePinAtIndex(1)).toBeTruthy();
    expect(page.getActivePinAtIndex(2)).toBeFalsy();
    page.getRightArrow().click();
    expect(page.getActivePinAtIndex(1)).toBeFalsy();
    expect(page.getActivePinAtIndex(2)).toBeTruthy();
    page.getLeftArrow().click();
    page.getLeftArrow().click();
    expect(page.getActivePinAtIndex(1)).toBeFalsy();
    expect(page.getActivePinAtIndex(5)).toBeTruthy();
  });
});
