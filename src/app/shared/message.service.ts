import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }


  public send(){
    console.log('Sending');
  }
}