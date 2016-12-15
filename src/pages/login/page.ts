import { TabsPage } from '../tabs/page';
import { NavController } from 'ionic-angular';
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

    public constructor(private nav: NavController) {}

    public onClickClose(): void {
        this.nav.setRoot(TabsPage);
    }

    public onClickButtonFacebook(): void {
        console.log("Clicked in the Facebook button");
    }

    public onClickButtonGoogle(): void {
        console.log("Clicked in the Google button");
    }
}