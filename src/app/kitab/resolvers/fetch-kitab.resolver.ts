import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/finally'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { HadithService } from 'Services/hadith.service'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { KitabService } from 'Services/kitab.service'

@Injectable()
export class FetchKitabResolver implements Resolve<any> {

    constructor(

        private ngProgress: NgProgress,
        private kitabService: KitabService) {
    }

    resolve = (route: ActivatedRouteSnapshot) => {

        this.ngProgress.start()

        const kitab_slug: string = route.paramMap.get('slug')

        return this.kitabService.fetchKitab(kitab_slug)
                   .delay(1000)
                   .finally(() => this.ngProgress.done())
    };
}
