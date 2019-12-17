import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// could put this in the environments file - use dev url in dev and prod url in prod
const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {
  model = 'routines';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(routine) {
    return this.httpClient.post(this.getUrl(), routine);
  }

  update(routine) {
    return this.httpClient.patch(this.getUrlForId(routine.id), routine);
  }

  delete(routineId) {
    return this.httpClient.delete(this.getUrlForId(routineId));
  }
}
