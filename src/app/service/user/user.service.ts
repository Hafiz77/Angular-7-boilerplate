import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.APIEndpoint;
  constructor(private httpClient: HttpClient) { }

  getUsers(page: number = 1) {
    return this.httpClient.get(this.API_URL + `users?page=${page}`);
  }

  getUser(userId) {
    return this.httpClient.get(`${this.API_URL + 'users'}/${userId}`);
  }

  updateUser(userId: number, data) {
    return this.httpClient.put(`${this.API_URL + 'users'}/${userId}`, data);
  }
  createUser(data) {
    return this.httpClient.post(`${this.API_URL + 'users'}`, data);
  }
}
