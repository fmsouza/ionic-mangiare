import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import strings from '../../strings';

/**
 * ChatPage class is the Chat view controller
 * 
 * @class {ChatPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ contactName }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="messages">
            <ion-list no-lines>
                <ion-item *ngFor="let message of messages">
                    <div class="me" *ngIf="contactName!==message.user">
                        <ion-avatar item-right>
                            <img src="{{message.avatar}}">
                        </ion-avatar>
                        <p>{{message.text}}</p>
                    </div>
                    <div class="others" *ngIf="contactName===message.user">
                        <ion-avatar item-left>
                            <img src="{{message.avatar}}">
                        </ion-avatar>
                        <p>{{message.text}}</p>
                    </div>
                </ion-item>
            </ion-list>
            
        </ion-content>
        <ion-footer no-shadow class="messages-footer">
            <ion-card>
                <ion-input type="text" placeholder="Place your message..." value=""></ion-input>
                <button color="dark" ion-button icon-only clear round>
                    <ion-icon name="send"></ion-icon>
                </button>
            </ion-card>
        </ion-footer>
        `,
})
export class ChatPage {

    private chatId: string;
    public contactName: string = '';

    public messages: any[] = [
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there!', timestamp: new Date() },
    ];

    public get Text(): any {
        return strings;
    }

    public constructor(params: NavParams) {
        this.chatId = params.get('chatId');
        this.contactName = params.get('name');
    }
}