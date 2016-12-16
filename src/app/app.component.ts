import {DEFAULT_PAGE} from '../const';
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';

@Component({
    template: `<ion-nav #rootNav [root]="rootPage"></ion-nav>`
})
export class Application {

    public rootPage: any;

    public constructor(platform: Platform) {
        platform.ready().then(() => this.onReady());
    }

    private onReady(): void {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        this.rootPage = DEFAULT_PAGE;
        Splashscreen.hide();
    }
}