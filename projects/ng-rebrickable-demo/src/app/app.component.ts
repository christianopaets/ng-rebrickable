import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RebrickableCacheService } from "ng-rebrickable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [RouterOutlet],
})
export class AppComponent {
  protected readonly cache = inject(RebrickableCacheService);
}
