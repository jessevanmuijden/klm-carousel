import { browser, by, element } from 'protractor';
import { promise } from "selenium-webdriver";
import Promise = promise.Promise;

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLeftArrow() {
    return element(by.css('.arrow-left'));
  }

  getRightArrow() {
    return element(by.css('.arrow-right'));
  }

  getNumberOfPins() {
    return element.all(by.css('.pin')).count();
  }

  getNumberOfSlides() {
    return element.all(by.css('.slide')).count();
  }

  getActiveSlideImageSource() {
    return element(by.css('.slide.active img')).getAttribute('src');
  }

  getActiveSlideTitle() {
    return element(by.css('.slide.active h2')).getText();
  }

  getActiveSlideText() {
    return element(by.css('.slide.active .slide-text')).getText();
  }

  getActiveSlideAtIndex(index: number): Promise<boolean> {
    return element(by.css(`.slide.active:nth-child(${index})`)).isPresent();
  }

  getActivePinAtIndex(index: number): Promise<boolean> {
    return element(by.css(`.pin.active:nth-child(${index})`)).isPresent();
  }
}
