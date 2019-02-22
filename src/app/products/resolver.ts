import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { delay, map, catchError} from 'rxjs/operators';
import { Observable, of, empty, throwError } from 'rxjs';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

import { HnService } from '../hn.service';

@Injectable()

export class HnResolver implements Resolve<any> {
    constructor(private hnService: HnService, private router: Router) {}

    resolve() {
        return this.hnService.getTopPosts().pipe(
            map(res => res),
            catchError(() => {
                return of({Error: 'data not available at this time'});
            })
        );
    }
}
