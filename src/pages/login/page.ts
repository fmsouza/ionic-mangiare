import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { User } from '../../models';
import { TabsPage } from '../';
import { AuthService } from '../../services';
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
                <button ion-button icon-right clear large full (click)="onClickButtonFacebook()">
                    Entrar com Facebook
                    <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>
                </button>
                <button ion-button icon-right clear large full color="danger" (click)="onClickButtonGoogle()">
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

    public constructor(private nav: NavController, private service: AuthService, private ctrl: AlertController) {}

    public onClickClose(): void {
        this.nav.setRoot(TabsPage);
    }

    public onClickButtonFacebook(): void {
        this.service.loginWithFacebook()
        .then(user => this.onLoginSuccess(user))
        .catch(error => this.onLoginError(error));
    }

    public onClickButtonGoogle(): void {
        console.log("Clicked in the Google button");
    }

    public onLoginSuccess(user: User): void {
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