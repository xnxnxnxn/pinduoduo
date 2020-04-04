import { Injectable } from '@angular/core';
import { Profile } from '../domain';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() {}

  getProfile() {
    return from([]);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    return from([]);
  }
}
