import { User } from './../models/user';
import { FacebookService } from './facebook';
import { Injectable } from '@angular/core';

/**
 * Implements the authentication as a provider
 * @class {AuthService}
 */
@Injectable()
export class AuthService {

    public constructor(private facebookService: FacebookService) {}

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
