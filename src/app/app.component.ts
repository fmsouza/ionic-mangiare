import { DEFAULT_PAGE } from '../components';
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';

@Component({
    template: `<ion-nav #rootNav [root]="rootPage"></ion-nav>`
})
export class Application {

    public rootPage: any = DEFAULT_PAGE;

    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    // public pages: MenuItem[] = DrawerLinks;

    public constructor(platform: Platform) {
        platform.ready().then(() => this.onReady());
    }

    private onReady(): void {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
    }
}