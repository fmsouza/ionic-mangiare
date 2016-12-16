import { App, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { TABS } from '../../const';

/**
 * TabsPage class is the Tabs view controller
 * 
 * @class {TabsPage}
 */
@Component({
    template: `
        <ion-tabs color="white">
            <ion-tab [tabIcon]="tab.icon" [tabTitle]="tab.title" [root]="tab.component" *ngFor="let tab of tabs"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {

    private nav: NavController;

    public tabs: any[] = TABS; // List of tabs to be displayed in the tab bar

    public constructor(app: App) {
        this.nav = app.getRootNav();
        document.addEventListener('backbutton', (event) => this.onClickBackButton(event)); // overwriting back button event
    }

    /**
     * Called when the 'backbutton' event is triggered.
     * @param {Event} event event object
     * @return {void}
     */
    private onClickBackButton(event: Event): void {
        event.preventDefault();
        if (!this.nav.getPrevious()) (<any>navigator).app.exitApp();
        this.nav.pop();
    }
}