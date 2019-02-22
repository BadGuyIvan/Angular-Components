import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HnService } from '../hn.service';

@Injectable()
export class ResolveDetailPost implements Resolve<any> {
    constructor(private hnService: HnService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.hnService.getPost(route.paramMap.get('id'));
    }
}
