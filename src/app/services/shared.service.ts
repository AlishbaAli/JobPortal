import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  cards$!:  Observable<Card[]>;



}
