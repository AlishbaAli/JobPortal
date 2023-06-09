import { Category } from './../../model/card.model';
import { Component} from '@angular/core';


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

}
