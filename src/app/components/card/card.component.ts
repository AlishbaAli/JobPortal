import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card;
  @Output() onCardSelect = new EventEmitter<Card>();

  get isDisabled(){
    return this.card.isactive == false

  }

  handleClick(){
   // console.log(this.card)
    this.onCardSelect.emit(this.card) //taking data out of the card component
  }

}
