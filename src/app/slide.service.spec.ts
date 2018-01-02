import {TestBed, inject} from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import {SlideService} from './slide.service';

describe('SlideService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SlideService,
      ]
    });
  });

  it('should be created', inject([SlideService], (service: SlideService) => {
    expect(service).toBeTruthy();
  }));

  it('should get slide data', inject([SlideService, HttpTestingController], (service: SlideService, httpMock: HttpTestingController) => {
    service.getSlides().subscribe((data: any) => {
      expect(data.title).toBe('KLM');
      expect(data.text).toBe('Vliegtuig');
      expect(data.image).toBe('boeing.png');
    });

    const req = httpMock.expectOne('api/slides', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      title: 'KLM',
      text: 'Vliegtuig',
      image: 'boeing.png'
    });

    httpMock.verify();
  }));
});
