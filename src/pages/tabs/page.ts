import {Component} from '@angular/core';
import {TABS} from '../../components';

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

    public tabs: any[] = TABS;
}