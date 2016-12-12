import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';
import {TABS} from '../components';
import strings from '../strings/index';

@Component({
    template: `
        <ion-tabs color="white">
            <ion-tab [tabIcon]="tab.icon" [tabTitle]="tab.title" [root]="tab.component" *ngFor="let tab of tabs"></ion-tab>
        </ion-tabs>
    `
})
export class Application {

    public tabs: any[] = TABS;

    public get Text(): any {
        return strings;
    }

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