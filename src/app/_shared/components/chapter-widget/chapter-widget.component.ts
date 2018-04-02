import { BabService } from 'Services/bab.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ComponentUtilitiesService } from 'Services/component-utilities.service'

@Component({
    selector: 'v-chapter-widget',
    template: `
        <section class="chapter-widget">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="row">
                            
                            <ng-container *ngFor="let bab of state.babs">
                                <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2">
                                    <div class="item">
                                        {{ bab.name }} {{ bab.count }}
                                    </div>
                                </div>
                            </ng-container>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styleUrls: [ 'chapter-widget.component.scss' ]
})
export class ChapterWidgetComponent extends ComponentUtilitiesService implements OnInit, OnDestroy {

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

        const meta$ = this.babService.meta$.subscribe(meta => this.meta = meta)
        const fetchBabs$ = this.babService.babs$.subscribe(babs => this.state.babs = babs)

        this.addSubscription(fetchBabs$, meta$)
    }

    ngOnDestroy(): void {
        this.unsubscribes()
    }
}
