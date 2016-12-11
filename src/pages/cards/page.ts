import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import strings from '../../strings';
import { StackConfig, ThrowEvent, DragEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';

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

        <ion-content class="home">
            <ul class="stack" swing-stack [stackConfig]="stackConfig" #stack (throwout)="onThrowOut($event)">
                <ion-card swing-card #cards [ngClass]="c.name" *ngFor="let c of cards">
                    <img src="{{c.avatar}}"/>
                    <ion-card-content>
                        <ion-card-title>
                            {{c.name}}
                        </ion-card-title>
                        <p>Wants to {{c.action}} {{c.plate}}</p>
                    </ion-card-content>
                </ion-card>
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
    // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
}