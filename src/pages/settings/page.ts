import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { DEFAULT_PAGE } from '../../const';
import { User } from '../../models';
import { AuthService } from '../../services';
import { ProfilePage, TermsPage, AboutPage } from '../';
import strings from '../../strings';

/**
 * SettingsPage class is the Settings view controller
 * 
 * @class {SettingsPage}
 */
@Component({ templateUrl: 'template.html' })
export class SettingsPage {

    private nav: NavController;
    public user: User;

    public get Text(): any {
        return strings;
    }

    public constructor(private service: AuthService, app: App) {
        this.nav = app.getRootNav();
    }

    /**
     * Triggered when the view is about to be loaded
     * @return {void}
     */
    public ionViewWillLoad(): void {
        this.service.getUser().then(user => this.user = user);
    }

    /**
     * Triggered when the logout button is clicked
     * @return {void}
     */
    public onClickLogout(): void {
        this.service.logout()
            .catch(error => console.error(`Logout error: ${JSON.stringify(error)}`))
            .then(() => this.nav.setRoot(DEFAULT_PAGE));
    }

    /**
     * Triggered when the about button is clicked
     * @return {void}
     */
    public onClickAbout(): void {
        this.nav.push(AboutPage);
    }

    /**
     * Triggered when the profile button is clicked
     * @return {void}
     */
    public onClickProfile(): void {
        this.nav.push(ProfilePage);
    }

    /**
     * Triggered when the use terms button is clicked
     * @return {void}
     */
    public onClickTerms(): void {
        this.nav.push(TermsPage);
    }
}