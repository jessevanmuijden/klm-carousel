import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';
import { Slide } from '../slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ SlideService ],
})
export class CarouselComponent implements OnInit {
  private DIRECTION_FORWARD: string = 'forward';
  private DIRECTION_BACKWARD: string = 'backward';
  slides: Slide[];
  slideIndex: number = 0;
  previousSlideIndex: number;
  direction: string;

  constructor(private slideService: SlideService) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides() : void {
    this.slideService.getSlides().subscribe(slides => this.slides = slides);
  }

  selectSlide(direction: string) {
    if (this.slides === undefined) {
      return;
    }
    this.direction = direction;
    this.previousSlideIndex = this.slideIndex;
    this.slideIndex = (direction == this.DIRECTION_FORWARD ? this.nextSlide() : this.previousSlide());
  }

  nextSlide() : number {
    return (this.slideIndex + 1) % this.slides.length;
  }

  previousSlide() : number {
    return (this.slideIndex > 0 ? this.slideIndex : this.slides.length) - 1;
  }

  isActive(index: number) : boolean {
    return (index === this.slideIndex);
  }

  isPrevious(index: number) : boolean {
    return (index === this.previousSlideIndex);
  }

  isMovingForward(direction: string) : boolean {
    return (direction === this.DIRECTION_FORWARD);
  }

  isMovingBackward(direction: string) : boolean {
    return (direction === this.DIRECTION_BACKWARD);
  }
}
