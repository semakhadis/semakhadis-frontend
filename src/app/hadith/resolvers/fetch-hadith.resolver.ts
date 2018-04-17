import 'rxjs/add/operator/let'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { chainrxjs } from 'Helpers/rxjs.compose'
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
                   .let(chainrxjs(
                       () => this.ngProgress.done(),
                       (error) => this.route.navigate([ '/404', {
                           err: 'Error',
                           msg: `Could not find asdasdasd`, error
                       } ])
                   ))
    };
}
