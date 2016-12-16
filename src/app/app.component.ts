import {DEFAULT_PAGE} from '../const';
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';

/**
 * Application class is where the app truly begins.
 * It is the very first component of the view and defines how the
 * other components will show up.
 * 
 * @class {Application}
 */
@Component({
    template: `<ion-nav #rootNav [root]="rootPage"></ion-nav>`
})
export class Application {

    public rootPage: any; // The component that will be loaded when the app loads

    public constructor(platform: Platform) {
        platform.ready().then(() => this.onReady());
    }

    /**
     * This method is called when the event 'ondeviceready' is triggered.
     * It means that the Cordova platform is ready and all the plugins are
     * ready to use.
     * @return {void}
     */
    private onReady(): void {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        this.rootPage = DEFAULT_PAGE;
        Splashscreen.hide();
    }
}