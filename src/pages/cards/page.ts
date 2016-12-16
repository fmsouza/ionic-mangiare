import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { StackConfig, ThrowEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';
import strings from '../../strings';

/**
 * CardsPage class is the Cards view controller
 * 
 * @class {CardsPage}
 */
@Component({ templateUrl: 'template.html' })
export class CardsPage {

    public get Text(): any {
        return strings;
    }

    @ViewChild('stack') swingStack: SwingStackComponent;
    @ViewChildren('cards') swingCards: QueryList<SwingCardComponent>;
    private stackTop: number = 0;

    cards: any[] = [
        { name: 'Francielle Hemsworth', action: 'cook', plate: 'strogonoff', avatar: 'http://lorempixel.com/300/200/people/1' },
        { name: 'Mirella Presley', action: 'eat', plate: 'japanese food', avatar: 'http://lorempixel.com/300/200/people/2' },
        { name: 'Jumes Sulley', action: 'cook', plate: 'italian food', avatar: 'http://lorempixel.com/300/200/people/3' },
        { name: 'Carl Livingson', action: 'eat', plate: 'pizza', avatar: 'http://lorempixel.com/300/200/people/4' },
        { name: 'Pharell Wage', action: 'cook', plate: 'lasagna', avatar: 'http://lorempixel.com/300/200/people/5' },
        { name: 'Megan June', action: 'eat', plate: 'popcorn', avatar: 'http://lorempixel.com/300/200/people/6' },
        { name: 'Miranda Prisley', action: 'eat', plate: 'hamburguer', avatar: 'http://lorempixel.com/300/200/people/7' },
        { name: 'Caroline Jameson', action: 'eat', plate: 'ice cream', avatar: 'http://lorempixel.com/300/200/people/8' }
    ];

    stackConfig: StackConfig = {
        throwOutConfidence: (offset: number, targetElement: HTMLElement) => {
        // you would put ur logic based on offset & targetelement to determine
        // what is your throwout confidence
            return 1;
        },
        minThrowOutDistance: 700    // default value is 400
    };

    /**
     * Triggered when the view just entered
     * @return {void}
     */
    ionViewDidLoad(): void {
        this.stackTop = this.swingCards.length;
    }

    /**
     * Called when the card is thrown out of the stack
     * @param {ThrowEvent} event Throw event object
     * @return {void}
     */
    public onThrowOut(event: ThrowEvent): void {
        this.stackTop--;
    }

    /**
     * Called when the Like button is clicked.
     * It triggers the throw event to the RIGHT on the card on the
     * top of the stack.
     * @return {void}
     */
    public onClickLike(): void {
        let card: any = this.swingCards.toArray()[this.stackTop-1];
        if (card) {
            card = card.getCard();
            card.throwOut(-1, 0); // throws to the left
        }
    }

    /**
     * Called when the Dislike button is clicked.
     * It triggers the throw event to the RIGHT on the card on the
     * top of the stack.
     * @return {void}
     */
    public onClickDislike(): void {
        let card: any = this.swingCards.toArray()[this.stackTop-1];
        if (card) {
            card = card.getCard();
            card.throwOut(1, 0); // throws to the right
        }
    }
}