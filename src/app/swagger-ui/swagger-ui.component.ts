import {
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
  OnInit,
} from "@angular/core";

import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

export const swaggerUIBundle = SwaggerUIBundle;
export const swaggerUIStandalonePreset = SwaggerUIStandalonePreset;

@Component({
  selector: "app-swagger-ui",
  templateUrl: "./swagger-ui.component.html",
  styleUrls: ["./swagger-ui.component.scss"],
})
export class SwaggerUiComponent implements OnInit {
  @ViewChild("swagger", { static: true }) swaggerDom: ElementRef<
    HTMLDivElement
  >;
  constructor() {}

  ngOnInit(): void {
    SwaggerUIBundle({
      dom_id: "#swagger-ui",
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout",
      url: "https://clientes-54107.web.app/assets/schema.json",
      docExpansion: "none",
      operationsSorter: "alpha",
    });
  }
}
