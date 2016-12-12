import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import strings from '../../strings';
import { StackConfig, ThrowEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';

/**
 * HomePage class is the Home view controller
 * 
 * @class {CardsPage}
 */
@Component({
    template: `
        <ion-header no-shadow>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_CARDS_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content class="card-stack">
            <ul class="stack" swing-stack [stackConfig]="stackConfig" #stack (throwout)="onThrowOut($event)">
                <div *ngFor="let c of cards">
                    <ion-card #cards swing-card [ngClass]="c.name">
                        <img src="{{c.avatar}}"/>
                        <ion-card-content>
                            <ion-card-title>
                                {{c.name}}
                            </ion-card-title>
                            <p>Wants to {{c.action}} {{c.plate}}</p>
                        </ion-card-content>
                    </ion-card>
                </div>
                <div class="stack-buttons">
                    <button ion-button color="secondary" round large (click)="onClickLike()">
                        <ion-icon name="thumbs-up"></ion-icon>
                    </button>
                    <button ion-button color="danger" round large (click)="onClickDislike()">
                        <ion-icon name="thumbs-down"></ion-icon>
                    </button>
                </div>
            </ul>
        </ion-content>
        `,
})
export class CardsPage {

    public get Text(): any {
        return strings;
    }

  @ViewChild('stack') swingStack: SwingStackComponent;
  @ViewChildren('cards') swingCards: QueryList<SwingCardComponent>;
  private stackTop: number = 0;

  cards: Array<any>;
  stackConfig: StackConfig;

  constructor() {

    this.stackConfig = {
      throwOutConfidence: (offset: number, targetElement: HTMLElement) => {
        // you would put ur logic based on offset & targetelement to determine
        // what is your throwout confidence
        return 1;
      },
      minThrowOutDistance: 700    // default value is 400
    };

    this.cards = [
      { name: 'Francielle Hemsworth', action: 'cook', plate: 'strogonoff', avatar: 'http://lorempixel.com/300/200/people/1' },
      { name: 'Mirella Presley', action: 'eat', plate: 'japanese food', avatar: 'http://lorempixel.com/300/200/people/2' },
      { name: 'Jumes Sulley', action: 'cook', plate: 'italian food', avatar: 'http://lorempixel.com/300/200/people/3' },
      { name: 'Carl Livingson', action: 'eat', plate: 'pizza', avatar: 'http://lorempixel.com/300/200/people/4' },
      { name: 'Pharell Wage', action: 'cook', plate: 'lasagna', avatar: 'http://lorempixel.com/300/200/people/5' },
      { name: 'Megan June', action: 'eat', plate: 'popcorn', avatar: 'http://lorempixel.com/300/200/people/6' },
      { name: 'Miranda Prisley', action: 'eat', plate: 'hamburguer', avatar: 'http://lorempixel.com/300/200/people/7' },
      { name: 'Caroline Jameson', action: 'eat', plate: 'ice cream', avatar: 'http://lorempixel.com/300/200/people/8' }
    ];
  }

  ionViewDidLoad(): void {
    this.stackTop = this.swingCards.length;
    this.swingCards.forEach((c) => console.log("get card:", c.getCard()));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  public onThrowOut(event: ThrowEvent): void {
      this.stackTop--;
      console.log("Card data:", this.cards[this.stackTop]);
  }

  public onClickLike(): void {
      let card: any = this.swingCards.toArray()[this.stackTop-1];
      if (card) {
        card = card.getCard();
        card.throwOut(-1, 0);
      }
  }

  public onClickDislike(): void {
    let card: any = this.swingCards.toArray()[this.stackTop-1];
    if (card) {
        card = card.getCard();
        card.throwOut(1, 0);
    }
  }
}