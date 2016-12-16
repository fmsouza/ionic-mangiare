import { Component } from '@angular/core';
import strings from '../../strings';

/**
 * AboutPage class is the About view controller
 * 
 * @class {AboutPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_ABOUT_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="about">
            <div [innerHTML]="Text.PAGE_ABOUT_CONTENT"></div>
        </ion-content>
        `,
})
export class AboutPage {

    public get Text(): any {
        return strings;
    }
}