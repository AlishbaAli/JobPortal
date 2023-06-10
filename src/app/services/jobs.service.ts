import { HttpClient } from '@angular/common/http';
import { Card} from '../model/card.model';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private cardData = [];

  constructor(private http: HttpClient) { }


getCardData(): Observable<any> {
  return this.http.get('https://job-portal-5a672-default-rtdb.firebaseio.com/jobs.json').pipe(
    map(responseObj => {
      const resultArr = [];
      const objResponse = responseObj as Card[];
      for (let item in objResponse) {
        resultArr.push({ ...objResponse[item], id: item })
      }
      return resultArr;
    })
  )
}

  getAllJobsByCategory(category: string ) : Observable<any>{
    return this.http.get(`https://job-portal-5a672-default-rtdb.firebaseio.com/jobs.json`).pipe(
      map(responseObj => {
        const resultArr = [];
        const objResponse = responseObj as Card[];
        for (let item in objResponse) {

          if (objResponse[item].category === category) {
            resultArr.push({ ...objResponse[item], id: item });
          }

        }
        return resultArr;
      })
    )
  }
}
