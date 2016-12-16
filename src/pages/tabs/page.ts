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

    public tabs: any[] = TABS;

    public constructor(app: App) {
        this.nav = app.getRootNav();
        document.addEventListener('backbutton', (event) => this.onClickBackButton(event));
    }

    private onClickBackButton(e: any): void {
        e.preventDefault();
        if (!this.nav.getPrevious()) (<any>navigator).app.exitApp();
        this.nav.pop();
    }
}