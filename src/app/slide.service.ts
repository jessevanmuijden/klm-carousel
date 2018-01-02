import { Injectable } from '@angular/core';
import {Slide} from "./slide";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class SlideService {

  private slidesUrl = 'api/slides';

  constructor(private http: HttpClient) { }

  getSlides (): Observable<Slide[]> {
    return this.http.get<Slide[]>(this.slidesUrl)
  }

  // getSlides(): Slide[] {
  //   return [
  //     {
  //       title: '236 bestemmingen',
  //       text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
  //       image: '/assets/images/soci1.png'
  //     },
  //     {
  //       title: '237 bestemmingen',
  //       text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
  //       image: '/assets/images/soci2.png'
  //     },
  //     {
  //       title: '238 bestemmingen',
  //       text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
  //       image: '/assets/images/soci3.png'
  //     },
  //     {
  //       title: '239 bestemmingen',
  //       text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
  //       image: '/assets/images/soci4.png'
  //     },
  //     {
  //       title: '240 bestemmingen',
  //       text: 'Zoek op budget, periode, regio en de locatie van uw Facebook vrienden wereldwijd. Een groot netwerk betekent veel herinneringen. Een groot netwerk betekent veel herinneringen.',
  //       image: '/assets/images/soci5.png'
  //     },
  //   ];
  // }

}
