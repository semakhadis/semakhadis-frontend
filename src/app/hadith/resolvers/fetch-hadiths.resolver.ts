import 'rxjs/add/operator/finally'
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { HadithService } from 'Services/hadith.service'

@Injectable()
export class FetchHadithsResolver implements Resolve<any> {

    constructor(private ngProgress: NgProgress,
                private hadithService: HadithService) {
    }

    resolve = () => {

        this.ngProgress.start()
        return this.hadithService.fetchHadiths()
                   .finally(() => this.ngProgress.done())
    };
}
