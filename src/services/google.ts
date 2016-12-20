import { Injectable } from '@angular/core';
import { GooglePlus } from 'ionic-native';
import { GOOGLEPLUS_OPTIONS } from '../const';
import { User } from '../models';

/**
 * GooglePlusService class is used to access Google Plus API.
 * @class {GooglePlusService}
 */
@Injectable()
export class GooglePlusService {

    public silentLogin(): Promise<any> {
        return GooglePlus.trySilentLogin(GOOGLEPLUS_OPTIONS);
    }

    /**
     * Tries to authenticate the user with native Google Plus data.
     * @return {Promise<any>}
     */
    public login(): Promise<any> {
        return GooglePlus.login(GOOGLEPLUS_OPTIONS)
        .then(auth => {
            console.log(JSON.stringify(auth));
            return new User(auth.displayName, auth.email, auth.imageUrl, auth.birthday, auth.gender, auth.location, {google: auth.userId});
        });
    }

    /**
     * Logs the user out.
     * @return {Promise<any>}
     */
    public logout(): Promise<any> {
        return GooglePlus.logout();
    }
}
