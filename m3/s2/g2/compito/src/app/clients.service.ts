import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiUrl:string = '../assets/db.json';

  constructor() {
    this.getAllClients();
   }

   getAllClients(){
    return fetch(this.apiUrl).then(res => res.json());
   }
}
