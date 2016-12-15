import { SwingModule } from 'angular2-swing';
import { FACEBOOK_PERMISSIONS } from '../../const';
import { TabsPage } from '../tabs/page';
import { AlertController, NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import {Component} from '@angular/core';
import strings from '../../strings';

/**
 * LoginPage class is the Login view controller
 * 
 * @class {LoginPage}
 */
@Component({
    template: `
        <ion-header no-shadow>
            <ion-navbar color="white">
                <ion-buttons end>
                    <button ion-button icon-only color="dark" (click)="onClickClose()">
                        <ion-icon name="close"></ion-icon>
                    </button>
                </ion-buttons>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="login">
            <div class="buttons-container">
                <button ion-button round icon-right clear large full (click)="onClickButtonFacebook()">
                    Entrar com Facebook
                    <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>
                </button>
                <button ion-button color="danger" round icon-right clear large full (click)="onClickButtonGoogle()">
                    Entrar com Google
                    <ion-icon ios="logo-google" md="logo-google"></ion-icon>
                </button>
            </div>
        </ion-content>
        `,
})
export class LoginPage {

    public get Text(): any {
        return strings;
    }

    public constructor(private nav: NavController, private ctrl: AlertController) {}

    public onClickClose(): void {
        this.nav.setRoot(TabsPage);
    }

    public onClickButtonFacebook(): void {
        Facebook.login(FACEBOOK_PERMISSIONS)
        .then(response => this.onLoginSuccess(response))
        .catch(error => this.onLoginError(error));
    }

    public onClickButtonGoogle(): void {
        console.log("Clicked in the Google button");
    }

    public onLoginSuccess(response): void {
        console.log(JSON.stringify(response));
        this.nav.setRoot(TabsPage);
    }

    private onLoginError(error: Error): void {
        this.ctrl.create({
            title: 'Login error',
            subTitle: 'An error ocurred while trying to log in.',
            buttons: ['Ok']
        }).present();
    }
}