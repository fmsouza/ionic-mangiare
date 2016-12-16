import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { ChatPage } from '../';
import strings from '../../strings';

/**
 * ChatsPage class is the Chats view controller
 * 
 * @class {ChatsPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_CHATS_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="chats">
            <ion-list [virtualScroll]="chats">
                <ion-item *virtualItem="let chat" (click)="onClickChat(chat)">
                    <ion-avatar item-left>
                        <img src="{{chat.avatar}}">
                    </ion-avatar>
                    <h2>{{chat.name}}</h2>
                    <p>{{chat.lastMessage}}</p>
                    <ion-badge color="danger" item-right *ngIf="chat.unread > 0">{{chat.unread}}</ion-badge>
                </ion-item>
            </ion-list>
            
        </ion-content>
        `,
})
export class ChatsPage {

    private nav: NavController;

    public chats: any[] = [
      { name: 'Francielle Hemsworth', avatar: 'http://lorempixel.com/300/200/people/1', lastMessage: 'Yeah, it would be awesome!', unread: 0 },
      { name: 'Mirella Presley', avatar: 'http://lorempixel.com/300/200/people/2', lastMessage: 'Nah, I don\'t think so...', unread: 2 },
      { name: 'Jumes Sulley', avatar: 'http://lorempixel.com/300/200/people/3', lastMessage: 'Meet you there', unread: 1 },
      { name: 'Carl Livingson', avatar: 'http://lorempixel.com/300/200/people/4', lastMessage: 'Hello!', unread: 1 },
      { name: 'Pharell Wage', avatar: 'http://lorempixel.com/300/200/people/5', lastMessage: '8 o\'clock?', unread: 0 }
    ];

    public get Text(): any {
        return strings;
    }

    public constructor(app: App) {
        this.nav = app.getRootNav();
    }

    public onClickChat(chat: any): void {
        this.nav.push(ChatPage, chat);
    }
}