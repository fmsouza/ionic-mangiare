import { Component, ViewChild } from '@angular/core';
import {NavParams, Content} from 'ionic-angular';
import strings from '../../strings';

/**
 * ChatPage class is the Chat view controller
 * 
 * @class {ChatPage}
 */
@Component({ templateUrl: 'template.html' })
export class ChatPage {

    @ViewChild(Content) content: Content;

    private chatId: string;
    public contactName: string = '';
    public currentMessage: string = '';

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

    /**
     * Triggered when the view just entered
     * @return {void}
     */
    public ionViewDidEnter(): void {
        this.jumpToBottom();
    }

    /**
     * Called when the send button is pressed. It send the message to the contact.
     * @return {void}
     */
    public onSendMessage(): void {
        let newMsg = { user: 'Brandon Lawrence', avatar: 'http://lorempixel.com/300/200/people/9', text: this.currentMessage, timestamp: new Date() };
        this.messages.push(newMsg);
        this.currentMessage = '';
        setTimeout(() => this.jumpToBottom(), 1);
    }

    /**
     * Used to scroll the view to the last message received/sent.
     * @return {void}
     */
    private jumpToBottom(): void {
        this.content.scrollToBottom(1);
    }
}