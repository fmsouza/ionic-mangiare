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
@Component({ templateUrl: 'template.html' })
export class LoginPage {

    public get Text(): any {
        return strings;
    }

    public constructor(private nav: NavController, private service: AuthService, private ctrl: AlertController) {}

    /**
     * Avoids the login and takes the user directly to the application.
     * @return {void}
     */
    public onClickClose(): void {
        this.nav.setRoot(TabsPage);
    }

    /**
     * Triggered when the Facebook button is pressed.
     * @return {void}
     */
    public onClickButtonFacebook(): void {
        this.service.loginWithFacebook()
        .then(user => this.onLoginSuccess(user))
        .catch(error => this.onLoginError(error));
    }

    /**
     * Triggered when the Google button is pressed - still does nothing.
     * @return {void}
     */
    public onClickButtonGoogle(): void {
        console.log("Clicked in the Google button");
    }

    /**
     * Triggered when the Login was successful - goes to the application.
     * @param {User} user user data loaded from social API
     * @return {void}
     */
    public onLoginSuccess(user: User): void {
        this.nav.setRoot(TabsPage);
    }

    /**
     * Triggered when the an error ocurred while trying to login.
     * Pops up an alert in the screen.
     * @param {Error} error Error instance
     * @return {void}
     */
    private onLoginError(error: Error): void {
        this.ctrl.create({
            title: 'Login error',
            subTitle: 'An error ocurred while trying to log in.',
            buttons: ['Ok']
        }).present();
    }
}