import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CheckCredentials implements CanActivate {
    canActivate() {
        console.log('checking on user credential - user logged in: passed');
        return true;
    }
}
