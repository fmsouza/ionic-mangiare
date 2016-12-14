import {Component} from '@angular/core';
import strings from '../../strings';

/**
 * TermsPage class is the Use Terms view controller
 * 
 * @class {TermsPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_TERMS_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="terms">
            <div [innerHTML]="Text.PAGE_TERMS_CONTENT"></div>
        </ion-content>
        `,
})
export class TermsPage {

    public get Text(): any {
        return strings;
    }
}