import {Component} from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { LoginPage, TabsPage } from '../';
import { AuthService } from '../../services';

/**
 * MainPage class is the Main view controller
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

    public ionViewWillLoad(): void {
        this.service.getLoginStatus()
            .then(({status}) => this.onStatusLoaded(status));
    }

    private onStatusLoaded(status: string): void {
        switch (status) {

            case 'connected':
                return this.goToApplication();

            case 'not_authorized':
            case 'unknown':
            default:
                return this.goToLogin();
        }
    }

    private goToApplication(): void {
        this.nav.setRoot(TabsPage);
    }

    private goToLogin(): void {
        this.nav.setRoot(LoginPage);
    }
}