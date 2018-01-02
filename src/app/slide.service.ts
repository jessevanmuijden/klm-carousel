import { Injectable } from '@angular/core';
import { Slide } from './slide';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SlideService {

  private slidesUrl: string = 'api/slides';

  constructor(private http: HttpClient) { }

  getSlides(): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.slidesUrl);
  }
}
