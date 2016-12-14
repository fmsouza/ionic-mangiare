import {Component} from '@angular/core';
import strings from '../../strings';

/**
 * ProfilePage class is the About view controller
 * 
 * @class {ProfilePage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_PROFILE_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="profile">
        </ion-content>
        `,
})
export class ProfilePage {

    public get Text(): any {
        return strings;
    }
}