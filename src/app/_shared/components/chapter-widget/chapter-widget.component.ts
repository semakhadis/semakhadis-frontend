import { BabService } from 'Services/bab.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ComponentUtilitiesService } from 'Services/component-utilities.service'

@Component({
    selector: 'v-chapter-widget',
    templateUrl: 'chapter-widget.component.html',
    styleUrls: ['chapter-widget.component.scss']
})
export class ChapterWidgetComponent extends ComponentUtilitiesService
    implements OnInit, OnDestroy {
    state = {
        babs: []
    }

    meta = {
        isLoading: false,
        isError: false
    }

    constructor(private babService: BabService) {
        super()
    }

    ngOnInit(): void {
        this.babService.fetchBabs()

        const meta$ = this.babService.meta$.subscribe(
            meta => (this.meta = meta)
        )
        const fetchBabs$ = this.babService.babs$.subscribe(
            babs => (this.state.babs = babs)
        )

        this.addSubscription(fetchBabs$, meta$)
    }

    ngOnDestroy(): void {
        this.unsubscribes()
    }
}
