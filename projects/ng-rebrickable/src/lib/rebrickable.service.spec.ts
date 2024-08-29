import { RebrickableService } from './rebrickable.service';
import { TestBed } from '@angular/core/testing';
import { provideRebrickable } from './';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DbMocks } from './__mocks__/db';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('Rebrickable Service', () => {
  let rebrickableService: RebrickableService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClientTesting(),
        provideRebrickable({
          apiKey: 'test-api-key',
        }),
        provideExperimentalZonelessChangeDetection(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    rebrickableService = TestBed.inject(RebrickableService);
  });

  test('should be defined', () => {
    expect(rebrickableService).toBeDefined();
  });

  test('should return list of colors', (done) => {
    rebrickableService
      .colors({
        page: 2,
        page_size: 2,
        ordering: {
          type: 'DESC',
          fields: ['name', 'id'],
        },
      })
      .subscribe((colors) => {
        expect(colors).toEqual(DbMocks.Colors);
        done();
      });
    const req = httpTestingController.expectOne(
      'https://rebrickable.com/api/v3/lego/colors/?ordering=-name%2Cid&page=2&page_size=2',
    );
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Colors);
  });

  test('should return a color', (done) => {
    rebrickableService
      .color(1, {
        ordering: {
          type: 'DESC',
          fields: ['name', 'id'],
        },
      })
      .subscribe((color) => {
        expect(color).toEqual(DbMocks.Color);
        done();
      });
    const req = httpTestingController.expectOne('https://rebrickable.com/api/v3/lego/colors/1/?ordering=-name%2Cid');
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Color);
  });

  test('should return a list of themes', (done) => {
    rebrickableService
      .themes({
        page: 2,
      })
      .subscribe((themes) => {
        expect(themes).toEqual(DbMocks.Themes);
        done();
      });
    const req = httpTestingController.expectOne('https://rebrickable.com/api/v3/lego/themes/?page=2');
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Themes);
  });

  test('should return a theme', (done) => {
    rebrickableService.theme(21).subscribe((theme) => {
      expect(theme).toEqual(DbMocks.Theme);
      done();
    });
    const req = httpTestingController.expectOne('https://rebrickable.com/api/v3/lego/themes/21/');
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Theme);
  });

  test('should return a list of minifigs', (done) => {
    rebrickableService
      .minifigs({
        page: 2,
        page_size: 10,
        ordering: {
          type: 'ASC',
          fields: ['name'],
        },
        in_set_num: 100,
        in_theme_id: 100,
        max_parts: 3,
        search: 'query',
        min_parts: 1,
      })
      .subscribe((minifigs) => {
        expect(minifigs).toEqual(DbMocks.Minifigs);
        done();
      });
    const req = httpTestingController.expectOne(
      'https://rebrickable.com/api/v3/lego/minifigs/?in_set_num=100&in_theme_id=100&max_parts=3&min_parts=1&ordering=name&page=2&page_size=10&search=query',
    );
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Minifigs);
  });

  test('should return a minifig', (done) => {
    rebrickableService.minifig('fig-000018').subscribe((minifig) => {
      expect(minifig).toEqual(DbMocks.Minifig);
      done();
    });
    const req = httpTestingController.expectOne('https://rebrickable.com/api/v3/lego/minifigs/fig-000018/');
    expect(req.request.method).toEqual('GET');
    req.flush(DbMocks.Minifig);
  });
});
