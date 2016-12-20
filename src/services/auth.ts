import { Injectable } from '@angular/core';
import { User } from '../models';
import { FacebookService } from './facebook';
import { GooglePlusService } from './google';

/**
 * Implements the authentication as a provider
 * @class {AuthService}
 */
@Injectable()
export class AuthService {

    public constructor(private facebookService: FacebookService, private googleService: GooglePlusService) {}

    /**
     * Checks the login status on the device
     * @return {Promise<any>}
     */
    public getLoginStatus(): Promise<any> {
        return this.facebookService.getLoginStatus();
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
        return this.googleService.login()
            .then(auth => console.log(JSON.stringify(auth)));
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
        return this.facebookService.logout();
    }

}
