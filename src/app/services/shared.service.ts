import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  private jobs!: any[];

  setJobs(jobs: any[]) {
    this.jobs = jobs;
  }

  getJobs() {
    return this.jobs;
  }

}
