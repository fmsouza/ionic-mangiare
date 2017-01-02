import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { LoginPage, TabsPage } from '../';
import { AuthService } from '../../services';
import { AuthState } from '../../const';

/**
 * MainPage class is the Main view controller. It checks for user login
 * and presents LoginPage or TabsPage depending on current login status.
 * 
 * @class {MainPage}
 */
@Component({
    template: `
        <ion-content>
            <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                <ion-spinner
                    color="primary"
                    duration="500"
                    name="crescent">
                </ion-spinner>
            </div>
        </ion-content>
    `,
})
export class MainPage {

    private nav: NavController;

    public constructor(private service: AuthService, app: App) {
        this.nav = app.getRootNav();
    }

    /**
     * Triggered when the view is about to be loaded
     * @return {void}
     */
    public ionViewWillLoad(): void {
        this.service.getLoginStatus()
            .then(({status}) => this.onStatusLoaded(status))
            .catch(error => this.onStatusLoadFailed(error));
    }

    /**
     * Takes the user to the correct screen based on the login state
     * @param {string} status Login status
     * @return {void}
     */
    private onStatusLoaded(status: string): void {
        switch (status) {

            case AuthState.CONNECTED:
                return this.goToApplication();

            case AuthState.NOT_AUTHORIZED:
            case AuthState.UNKNOWN:
            default:
                return this.goToLogin();
        }
    }

    private onStatusLoadFailed(error: Error): void {
        console.error(error);
        this.goToLogin();
    }

    /**
     * The user is logged in. Avoids login screen and just goes to the Application.
     * @return {void}
     */
    private goToApplication(): void {
        this.nav.setRoot(TabsPage);
    }

    /**
     * The user is not logged in. Takes him to the LoginPage.
     * @return {void}
     */
    private goToLogin(): void {
        this.nav.setRoot(LoginPage);
    }
}