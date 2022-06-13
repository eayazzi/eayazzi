import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientesService } from "src/app/services/clientes.service";
import { Cliente } from "src/app/interfaces/cliente";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-client-create",
  templateUrl: "./client-create.component.html",
  styleUrls: ["./client-create.component.scss"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-AR" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ClientCreateComponent implements OnInit {
  createClient: FormGroup;
  submitted = false;
  client: Cliente;

  constructor(
    private fb: FormBuilder,
    private _clientService: ClientesService,
    private datePipe: DatePipe,
    private _toastr: ToastrService
  ) {
    this.createClient = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
    });
  }

  ngOnInit() {}

  addClient() {
    this.submitted = true;
    if (this.createClient.invalid) {
      this._toastr.error("Todos los campos son requeridos");
      return;
    }
    this.client = this.createClient.value;
    this.client.dateOfBirth = new Date(
      this.datePipe.transform(this.client.dateOfBirth, "MM-dd-yyyy")
    );

    this._clientService
      .addClient(this.client)
      .then(() => {
        this._toastr.success("Cliente registrado");
      })
      .catch((error) => {
        this._toastr.success(error);
      });
  }
}
