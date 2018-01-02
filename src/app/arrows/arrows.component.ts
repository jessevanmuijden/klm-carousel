import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.scss']
})
export class ArrowsComponent {
  @Output('selectSlide') onNavigated = new EventEmitter<string>();

  navigate(direction: string) {
    this.onNavigated.emit(direction);
  }
}
