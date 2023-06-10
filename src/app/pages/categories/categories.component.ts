import { SharedService } from './../../services/shared.service';
import { JobsService } from './../../services/jobs.service';
import { Card, Category } from './../../model/card.model';
import { Component} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  all = Category.ALL;
  fstack = Category.FULL_STACK;
  back = Category.BACK_END;
  front = Category.FRONT_END;
  cards$!:  Observable<Card[]>;
  constructor(private jobsService: JobsService , private SharedService: SharedService){

  }

  getJobsByCategory() {
    this.cards$ =this.jobsService.getAllJobsByCategory(this.fstack);
  }

}
