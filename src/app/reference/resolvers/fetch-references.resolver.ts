import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/finally'
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'
import { ReferenceService } from 'Services/reference.service'

@Injectable()
export class FetchReferencesResolver implements Resolve<any> {

    constructor(private ngProgress: NgProgress,
                private referenceService: ReferenceService) {
    }

    resolve = () => {

        this.ngProgress.start()

        return this.referenceService.fetchReferences()
                   .delay(2000)
                   .finally(() => this.ngProgress.done())
    };
}
