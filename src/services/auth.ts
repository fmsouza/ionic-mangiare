import { Injectable } from '@angular/core';
import { User } from '../models';
import { AuthState, AuthProvider } from '../const';
import { FacebookService } from './facebook';
import { GooglePlusService } from './google';
import { PreferencesDAO } from '../dao';

/**
 * Implements the authentication as a provider
 * @class {AuthService}
 */
@Injectable()
export class AuthService {

    public constructor(private facebookService: FacebookService,
        private googleService: GooglePlusService, private prefs: PreferencesDAO) {}

    /**
     * Checks the login status on the device
     * @return {Promise<any>}
     */
    public getLoginStatus(): Promise<any> {
        return this.prefs.getKey<string>('authProvider')
            .then(authProvider => {
                switch (authProvider) {
                    case AuthProvider.FACEBOOK: return this.getFacebookLoginStatus();
                    case AuthProvider.GOOGLE: return this.getGoogleLoginStatus();
                    default: return { status: AuthState.UNKNOWN };
                }
            });
    }

    /**
     * Checks the Facebook login status on the device
     * @return {Promise<any>}
     */
    private getFacebookLoginStatus(): Promise<any> {
        return this.facebookService.getLoginStatus();
    }

    /**
     * Checks the Google login status on the device
     * @return {Promise<any>}
     */
    private getGoogleLoginStatus(): Promise<any> {
        return this.googleService.silentLogin();
    }

    /**
     * Tries to log in the user with Facebook.
     * @return {Promise<User>}
     */
    public loginWithFacebook(): Promise<User> {
        return this.facebookService.login()
            .then(auth => this.getUser());
    }

    public loginWithGooglePlus(): Promise<User> {
        return this.googleService.login();
    }

    /**
     * Get the user logged in.
     * @return {Promise<User>}
     */
    public getUser(): Promise<User> {
        return this.facebookService.getUser();
    }

    /**
     * Logs the user out.
     * @return {Promise<any>}
     */
    public logout(): Promise<any> {
        return this.prefs.getKey<string>('authProvider')
            .then(authProvider => {
                switch (authProvider) {
                    case AuthProvider.FACEBOOK: return this.logoutFacebook();
                    case AuthProvider.GOOGLE: return this.logoutGoogle();
                    default: return;
                }
            });
        
    }

    /**
     * Logs the Facebook user out.
     * @return {Promise<any>}
     */
    private logoutFacebook(): Promise<any> {
        return this.facebookService.logout();
    }

    /**
     * Logs the Google user out.
     * @return {Promise<any>}
     */
    private logoutGoogle(): Promise<any> {
        return this.googleService.logout();
    }

}
