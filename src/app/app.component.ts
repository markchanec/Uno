import { Component } from '@angular/core';
import { Cards } from '../services/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // min 2 and max 7 players
  public items: string[] = ['2', '3', '4', '5', '6', '7'];
  public basket: Cards[] = [];
  public CardsDealtArray: string[] = [];
  public CardsDealt = false;

  // item == $event
  // 107 cards starting from 0
  whenDealt(item: string): void {
    console.log('whenDealt: ', item);
    this.basket = [];
    this.CardsDealtArray = [];
    let cardsValue: string;
    let newCard: Cards;

    for (let i = 0; i < Number(item) ; i++) {// players
      for (let j = 1; j <= 7 ; j++) {// 7 cards each
        do {// check new card has not been dealt before
          cardsValue = String(Math.floor(Math.random() * 107));
          console.log('player = ', String(i));
          console.log('card = ', cardsValue);
        }
        while ( this.checkCard (cardsValue));
        // cardsValue = String(Math.floor(Math.random() * 107));
        this.CardsDealtArray.push(cardsValue);

        newCard = new Cards(
          Number( i + 1 ),
          '../assets/uno_deck/' + cardsValue + '.png');
        // console.log('url = ', String(newCard.imgURL));
        this.basket.push(newCard);
      }
    }
  }

  checkCard( cardsValue: string ): boolean {
    for (let i = 0; i < this.CardsDealtArray.length ; i++) {
      if (this.CardsDealtArray.length === 0) {
        this.CardsDealt = false;
        break;
      }
      if (this.CardsDealtArray[i] === cardsValue ) {
        this.CardsDealt = true;
        break;
      } else {
        this.CardsDealt = false;
      }
    }
    console.log('dealtb4 = ', String(this.CardsDealt));
    return this.CardsDealt;
  }

  whenReDeal(): void {
    // this.basket.splice(idx, 1);
    this.basket = [];
    this.CardsDealtArray = [];
  }

}
