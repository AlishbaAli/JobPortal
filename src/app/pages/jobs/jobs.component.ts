import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  cards$!:  Observable<Card[]>;
  constructor(private jobsService: JobsService){

  }
  ngOnInit(): void {
   this.cards$ = this.jobsService.getCardData();
  }
  handleCardSelect(card: Card){
    console.log("handlecardselect from parent", card)//catching the event in parent from card

  }

}
