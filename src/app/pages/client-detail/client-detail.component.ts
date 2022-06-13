import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ClientesService } from "src/app/services/clientes.service";
import { Cliente } from "src/app/interfaces/cliente";
import { Subject } from "rxjs";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.scss"],
})
export class ClientDetailComponent implements OnInit {
  id: string | null;
  client: any[] = [];
  toDate: Date;
  lifeExpectancy: number = 73;
  dateExp: Date;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    private _clientService: ClientesService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getClient();
  }
  getClient() {
    this._clientService.getClient(this.id).subscribe((res) => {
      this.client.push(res.payload.data());
      this.toDate = new Date(this.client[0].dateOfBirth.toDate());
      this.getDateExpiration();
    });
  }
  getDateExpiration() {
    if (this.client.length > 0) {
      this.dateExp = new Date();
      let year = this.toDate.getFullYear();
      this.dateExp.setFullYear(year + this.lifeExpectancy);
    } else {
      return this.toDate;
    }
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
