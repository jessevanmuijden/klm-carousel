import {Component, Input} from '@angular/core';
import {Slide} from "../slide";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @Input() slide: Slide;
}
