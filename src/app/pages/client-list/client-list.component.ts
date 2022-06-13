import { Component, OnInit } from "@angular/core";
import { Observable, pipe, Subject } from "rxjs";

import { ClientesService } from "src/app/services/clientes.service";
import { Cliente } from "src/app/interfaces/cliente";
import { LoadingService } from "src/app/services/loading.service";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.scss"],
})
export class ClientListComponent implements OnInit {
  loading: boolean = true;
  clients: Cliente[] = [];
  dataSource: any[] = [];
  total: any = "";
  variance: any;
  standardDeviation: number;
  displayedColumns = ["name", "lastname", "age", "date", "actions"];
  private ngUnsubscribe = new Subject<void>();
  constructor(
    private _clientService: ClientesService,
    private _loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getClients();
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loadingService.loadingSub
      .pipe(delay(0)) 
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  getClients() {
    this._clientService.getClients().subscribe((data) => {
      data.forEach((element: any) => {
        this.clients.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      this.dataSource = this.clients;

      this.getTotalCost();
      this.getStandardDeviation();
    });
  }
  getTotalCost() {
    if (this.dataSource.length > 0) {
      this.total = this.dataSource
        .map((t) => t.age)
        .reduce((acc, value) => acc + value, 0);
      return this.total / this.dataSource.length;
    } else {
      return "";
    }
  }
  getStandardDeviation() {
    // Calcular la media
    let mean =
      this.dataSource
        .map((t) => t.age)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0) / this.dataSource.length;

    // Edad menos la media, elevado al cuadrado
    let valores = this.dataSource
      .map((t) => t.age)
      .reduce((acc, value) => acc + (value - mean) ** 2, 0);

    // Se calcula la varianza diviviendo los la sumatoria
    // de valores al cuadrado anteriores dividio el total de datos
    let variance = valores / this.dataSource.length;

    // Se calcula la desviación estandar haciendo la raiz cuadrada 
    // de la varianza
    this.standardDeviation = Math.sqrt(variance);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
