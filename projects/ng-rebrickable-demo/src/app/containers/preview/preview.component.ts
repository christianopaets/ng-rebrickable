import { Component, inject } from "@angular/core";
import { CatService } from "../../cat.service";
import { RebrickableService } from "ng-rebrickable";
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
  standalone: true,
  imports: [CardComponent, AsyncPipe],
})
export class PreviewComponent {
  private readonly catService = inject(CatService);
  private readonly rebrickableService = inject(RebrickableService);

  fact$ = this.catService.fact();

  colors$ = this.rebrickableService.colors({ page: 3, page_size: 1 });

  color$ = this.rebrickableService.color(1);

  themes$ = this.rebrickableService.themes({ page: 1, page_size: 1 });

  theme$ = this.rebrickableService.theme(1);

  element$ = this.rebrickableService.elementDetails(6103777);

  minifigs$ = this.rebrickableService.minifigs({ page: 10, page_size: 5 });

  minifig$ = this.rebrickableService.minifig("fig-000011");

  minifigParts$ = this.rebrickableService.minifigParts("fig-000011");

  minifigPartsExtended$ = this.rebrickableService.minifigParts("fig-000011", { inc_part_details: true });

  minifigSets$ = this.rebrickableService.minifigSets("fig-000011");

  partCategories$ = this.rebrickableService.partCategories();

  partCategory$ = this.rebrickableService.partCategory(1);

  parts$ = this.rebrickableService.parts({ page_size: 2 });

  partsExtended$ = this.rebrickableService.parts({ inc_part_details: true, page_size: 2 });

  part$ = this.rebrickableService.part("003383");

  partColors$ = this.rebrickableService.partColors("003383");

  partColor$ = this.rebrickableService.partColor("003383", 9999);

  partColorSets$ = this.rebrickableService.partColorSets("003383", 9999);

  sets$ = this.rebrickableService.sets({ page_size: 2 });

  set$ = this.rebrickableService.set("011-1");

  setAlternates$ = this.rebrickableService.setAlternates("42068-1");

  setMinifigs$ = this.rebrickableService.setMinifigs("42068-1");

  setParts$ = this.rebrickableService.setParts("42068-1");

  setPartsNoColor$ = this.rebrickableService.setParts("42068-1", { inc_part_details: true, inc_color_details: false });

  setSets$ = this.rebrickableService.setSets("1505-1");
}
