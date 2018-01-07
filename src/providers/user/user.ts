import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { AngularFireDatabase } from 'angularfire2/database';
import {UserModel} from './../../models/user/user.model';
import { Observable } from 'rxjs/Observable';
//import * as firebase from 'firebase';
/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  
  private userListRef = this.db.list<UserModel>('users');
  constructor(public api: Api, private db: AngularFireDatabase) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */

 
  login(accountInfo: any) {
    this.userListRef = this.db.list<UserModel>('users', ref => ref.orderByChild('username').equalTo(accountInfo.username));

    return this.userListRef;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {

    
      var usermodel: UserModel = {
        username: accountInfo.username,
        name: accountInfo.nom,
        prenom: accountInfo.prenom,
        email: accountInfo.email,
        password: accountInfo.password,
        tel: accountInfo.tel,
        address:accountInfo.address,
        type: accountInfo.type
      }

      return this.userListRef.push(usermodel);
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
