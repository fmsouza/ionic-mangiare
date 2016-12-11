import { TABS } from '../components';
import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';
import strings from '../strings/index';

@Component({
    template: `
        <ion-tabs color="white">
            <ion-tab [tabIcon]="tab.icon" [tabTitle]="tab.title" [root]="tab.component" *ngFor="let tab of tabs"></ion-tab>
        </ion-tabs>
    `
})
export class Application {

    // the root nav is a child of the root app component
    // @ViewChild(Nav) gets a reference to the app's root nav
    @ViewChild(Nav) public nav: Nav;

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
        StatusBar.backgroundColorByHexString('#FFFFFF');
        StatusBar.styleDefault();
        Splashscreen.hide();
    }
}