import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private  _url:string = 'http://192.168.0.17:8000/api/';

    getAll() {
        return this.http.get(this._url+'users/', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this._url+'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this._url+'users/register/', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this._url+'users/edit/' + user.id +'/', user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this._url+'users/user-delete/'+ id+'/', this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}