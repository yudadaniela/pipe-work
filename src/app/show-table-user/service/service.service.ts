import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  users: Array<any> = [
    { id: 1, name: 'Aslan', role: 'cliente', date: Date.now() },
    { id: 2, name: 'Wendy', role: 'administrador', date: Date.now() },
    { id: 3, name: 'Bonny', role: 'cliente', date: Date.now()},
    { id: 4, name: 'Manchas', role: 'administrador', date: Date.now() },
    { id: 5, name: 'Blacky', role: 'cliente', date: Date.now() },
  ];

  getUser(){
    return this.users
  }
  constructor() { }
}
