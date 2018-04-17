import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/finally'
import 'rxjs/add/observable/empty'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { Observable } from 'rxjs/Observable'
import { HadithService } from 'Services/hadith.service'
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router'

@Injectable()
export class FetchHadithResolver implements Resolve<any> {

    constructor(private route: Router,
                private ngProgress: NgProgress,
                private hadithService: HadithService) {
    }

    resolve = (activateRoute: ActivatedRouteSnapshot) => {

        this.ngProgress.start()

        const hadith_slug: string = activateRoute.paramMap.get('slug')

        return this.hadithService.fetchHadith(hadith_slug)
                   .delay(1000)
                   .finally(() => this.ngProgress.done())
                   .catch(error => {
                       this.route.navigate([ '/404', {
                           err: 'Error',
                           msg: `Could not find ${hadith_slug}`, error
                       } ])

                       return Observable.empty()
                   })
    };
}
