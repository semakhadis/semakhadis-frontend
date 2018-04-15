import 'rxjs/add/operator/finally'
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { KitabService } from 'Services/kitab.service'

@Injectable()
export class FetchKitabsResolver implements Resolve<any> {

    constructor(private ngProgress: NgProgress,
                private kitabService: KitabService) {
    }

    resolve = () => {

        this.ngProgress.start()
        return this.kitabService.fetchKitabs()
                   .finally(() => this.ngProgress.done())
    };
}
