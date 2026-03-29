import { RebrickableService } from "./rebrickable.service";
import { TestBed } from "@angular/core/testing";
import { provideRebrickable } from "./";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { DbMocks } from "./__mocks__/db";
import { provideZonelessChangeDetection } from "@angular/core";
import { beforeEach, describe, expect, test } from "vitest";
import { firstValueFrom } from "rxjs";
import { HttpParams } from "@angular/common/http";

describe("Rebrickable Service", () => {
  const baseUrl = "https://rebrickable.com/api/v3/lego";
  let rebrickableService: RebrickableService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideRebrickable("test-api-key"), provideZonelessChangeDetection()],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    rebrickableService = TestBed.inject(RebrickableService);
  });

  test("should be defined", () => {
    expect(rebrickableService).toBeDefined();
  });

  test("should return list of colors", async () => {
    const colors$ = rebrickableService.colors({
      page: 2,
      page_size: 2,
      ordering: [
        { type: "DESC", field: "name" },
        { type: "ASC", field: "id" },
      ],
    });
    const colors = firstValueFrom(colors$);
    const req = httpTestingController.expectOne(`${baseUrl}/colors/?ordering=-name%2Cid&page=2&page_size=2`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Colors);
    expect(await colors).toEqual(DbMocks.Colors);
  });

  test("should return a color", async () => {
    const color$ = rebrickableService.color(1, {
      ordering: [
        { type: "DESC", field: "name" },
        { type: "DESC", field: "id" },
      ],
    });
    const color = firstValueFrom(color$);
    const req = httpTestingController.expectOne(`${baseUrl}/colors/1/?ordering=-name%2C-id`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Color);
    expect(await color).toEqual(DbMocks.Color);
  });

  test("should return a list of themes", async () => {
    const themes$ = rebrickableService.themes({ page: 2 });
    const themes = firstValueFrom(themes$);
    const req = httpTestingController.expectOne(`${baseUrl}/themes/?page=2`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Themes);
    expect(await themes).toEqual(DbMocks.Themes);
  });

  test("should return a theme", async () => {
    const theme$ = rebrickableService.theme(21);
    const theme = firstValueFrom(theme$);
    const req = httpTestingController.expectOne(`${baseUrl}/themes/21/`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Theme);
    expect(await theme).toEqual(DbMocks.Theme);
  });

  test("should return a list of minifigs", async () => {
    const minifigs$ = rebrickableService.minifigs({
      page: 2,
      page_size: 10,
      ordering: [{ type: "ASC", field: "name" }],
      in_set_num: 100,
      in_theme_id: 100,
      max_parts: 3,
      search: "query",
      min_parts: 1,
    });
    const minifigs = firstValueFrom(minifigs$);
    const params = new HttpParams()
      .set("in_set_num", "100")
      .set("in_theme_id", "100")
      .set("max_parts", "3")
      .set("min_parts", "1")
      .set("ordering", "name")
      .set("page", "2")
      .set("page_size", "10")
      .set("search", "query");
    const req = httpTestingController.expectOne(`${baseUrl}/minifigs/?${params.toString()}`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Minifigs);
    expect(await minifigs).toEqual(DbMocks.Minifigs);
  });

  test("should return a minifig", async () => {
    const minifig$ = rebrickableService.minifig("fig-000018");
    const minifig = firstValueFrom(minifig$);
    const req = httpTestingController.expectOne(`${baseUrl}/minifigs/fig-000018/`);
    expect(req.request.method).toEqual("GET");
    req.flush(DbMocks.Minifig);
    expect(await minifig).toEqual(DbMocks.Minifig);
  });
});
