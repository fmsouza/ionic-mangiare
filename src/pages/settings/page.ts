import { DEFAULT_PAGE } from '../../const';
import { User } from '../../models/user';
import {Component} from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { ProfilePage } from '../profile/page';
import { TermsPage } from '../terms/page';
import { AboutPage } from '../about/page';
import strings from '../../strings';

/**
 * SettingsPage class is the Settings view controller
 * 
 * @class {SettingsPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_SETTINGS_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="settings">
            <ion-list>
                <ion-item>
                    <ion-avatar item-left>
                        <img src="{{ user?.avatar }}">
                    </ion-avatar>
                    <h2>{{ user?.name }}</h2>
                    <p>{{ user?.email }}</p>
                    <button ion-button item-right icon-only clear color="dark" (click)="onClickLogout()">
                        <ion-icon name="log-out"></ion-icon>
                    </button>
                </ion-item>
                <ion-list-header>
                    {{ Text.PAGE_SETTINGS_USER }}
                </ion-list-header>
                <ion-item (click)="onClickProfile()">
                    <ion-icon name="person" item-left></ion-icon>
                    {{ Text.PAGE_SETTINGS_PROFILE }}
                </ion-item>
                <ion-item>
                    <ion-icon name="card" item-left></ion-icon>
                    {{ Text.PAGE_SETTINGS_CREDITCARD }}
                </ion-item>
                <ion-list-header>
                    {{ Text.PAGE_SETTINGS_SYSTEM }}
                </ion-list-header>
                <ion-item>
                    <ion-icon name="megaphone" item-left></ion-icon>
                    <ion-label>{{ Text.PAGE_SETTINGS_SOUNDS }}</ion-label>
                    <ion-toggle></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-icon name="notifications" item-left></ion-icon>
                    <ion-label>{{ Text.PAGE_SETTINGS_NOTIFICATIONS }}</ion-label>
                    <ion-toggle></ion-toggle>
                </ion-item>
                <ion-item (click)="onClickAbout()">
                    <ion-icon name="help-circle" item-left></ion-icon>
                    {{ Text.PAGE_SETTINGS_ABOUT }}
                </ion-item>
                <ion-item (click)="onClickTerms()">
                    <ion-icon name="document" item-left></ion-icon>
                    {{ Text.PAGE_SETTINGS_TERMS }}
                </ion-item>
            </ion-list>
        </ion-content>
        `,
})
export class SettingsPage {

    private nav: NavController;
    public user: User;

    public get Text(): any {
        return strings;
    }

    public constructor(private service: AuthService, app: App) {
        this.nav = app.getRootNav();
    }

    public ionViewWillLoad(): void {
        this.service.getUser().then(user => this.user = user);
    }

    public onClickLogout(): void {
        this.service.logout()
            .then(() => this.nav.setRoot(DEFAULT_PAGE))
            .catch(error => console.error(`Logout error: ${JSON.stringify(error)}`));
    }

    public onClickAbout(): void {
        this.nav.push(AboutPage);
    }

    public onClickProfile(): void {
        this.nav.push(ProfilePage);
    }

    public onClickTerms(): void {
        this.nav.push(TermsPage);
    }
}