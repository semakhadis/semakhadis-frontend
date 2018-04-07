import 'rxjs/add/operator/finally'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { HadithService } from 'Services/hadith.service'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'

@Injectable()
export class FetchHadithResolver implements Resolve<any> {

    constructor(
        private ngProgress: NgProgress,
        private hadithService: HadithService) {
    }

    resolve = (route: ActivatedRouteSnapshot) => {

        this.ngProgress.start()

        const hadith_slug: string = route.paramMap.get('slug')

        return this.hadithService.fetchHadith(hadith_slug)
                   .finally(() => this.ngProgress.done())
    };
}
