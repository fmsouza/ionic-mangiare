import { Injectable } from '@angular/core';
import { Facebook } from 'ionic-native';
import { Http } from '@angular/http';
import { FACEBOOK_FIELDS, FACEBOOK_PERMISSIONS } from '../const';
import { User } from '../models';

/**
 * FacebookService class is used to access Facebook API.
 * @class {FacebookService}
 */
@Injectable()
export class FacebookService {

    public constructor(private http: Http) {}

    public getLoginStatus(): Promise<any> {
        return Facebook.getLoginStatus();
    }

    /**
     * Tries to authenticate the user with native Facebook data.
     * @return {Promise<any>}
     */
    public login(): Promise<any> {
        return Facebook.login(FACEBOOK_PERMISSIONS);
    }

    /**
     * Gets all the 'public_profile' user data
     * @param {string} token - Facebook User token
     * @return {Promise<any>}
     */
    public getUser(): Promise<User> {
        return Facebook.api(`/me?fields=${FACEBOOK_FIELDS.join(',')}`, FACEBOOK_PERMISSIONS)
            .then( data => new User(data.name, data.email, data.picture.data.url, data.birthday, data.gender, data.location.name, {facebook: data.id}));
    }

    /**
     * Logs the user out.
     * @return {Promise<any>}
     */
    public logout(): Promise<any> {
        return Facebook.logout();
    }
}
