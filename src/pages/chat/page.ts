import { Component, ViewChild } from '@angular/core';
import {NavParams, Content} from 'ionic-angular';
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
            <div *ngFor="let message of messages">
                <div class="message-wrapper {{ (message.user==='Brandon Lawrence')? 'me':'them' }}">
                    <div class="text-wrapper" *ngIf="message.user==='Brandon Lawrence'">{{message.text}}</div>
                    <div class="circle-wrapper">
                        <img src="{{message.avatar}}" />
                    </div>
                    <div class="text-wrapper" *ngIf="message.user!=='Brandon Lawrence'">{{message.text}}</div>
                </div>
            </div>
        </ion-content>
        <ion-footer no-shadow class="messages-footer">
            <ion-card>
                <ion-input type="text" [placeholder]="Text.PAGE_CHAT_MESSAGEBOX" value=""></ion-input>
                <button color="dark" ion-button icon-only clear round>
                    <ion-icon name="send"></ion-icon>
                </button>
            </ion-card>
        </ion-footer>
        `,
})
export class ChatPage {

    @ViewChild(Content) content: Content;

    private chatId: string;
    public contactName: string = '';

    public messages: any[] = [
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Hey! What\'s up?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Hey! Everything is ok here.', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'What about you?', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'I\'m fine too, thanks!', timestamp: new Date() },
        { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: 'Meet you 8 o\'clock ate the bar, ok?', timestamp: new Date() },
        { user: this.contactName, avatar: 'http://lorempixel.com/300/200/people/8', text: 'Fine, see you there! Hope I will not get late. I\'ll be in touch with you :)', timestamp: new Date() },
    ];

    public get Text(): any {
        return strings;
    }

    public constructor(params: NavParams) {
        this.chatId = params.get('chatId');
        this.contactName = params.get('name');
    }

    public ionViewDidEnter(): void {
        this.content.scrollToBottom(1);
    }
}