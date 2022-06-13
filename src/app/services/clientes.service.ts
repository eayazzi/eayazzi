import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Cliente } from "../interfaces/cliente";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClientesService {
  constructor(private firestore: AngularFirestore) {}

  addClient(client: Cliente): Promise<any> {
    return this.firestore.collection("clientes").add(client);
  }

  getClients(): Observable<any> {
    return this.firestore.collection("clientes").snapshotChanges();
  }

  getClient(id: string): Observable<any> {
    return this.firestore.collection("clientes").doc(id).snapshotChanges();
  }
}
