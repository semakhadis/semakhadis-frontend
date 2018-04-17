import { ActivatedRoute } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ComponentUtilitiesService } from 'Services/component-utilities.service'

@Component({
    template: `        
        <div style="width: 100%;height: 200px; display: flex; justify-content: center; align-items: center;flex-direction: column;">
            <h1>404</h1>
            <pre>{{ state.error | json }}</pre>
        </div>
    `,
    styleUrls: [ '404.component.scss' ]
})
export class Error404Component extends ComponentUtilitiesService implements OnInit, OnDestroy {
    state = { error: {} }

    constructor(private route: ActivatedRoute) {
        super()
    }

    ngOnInit(): void {
        const param$ = this.route.params.subscribe(params => this.state.error = params);

        this.addSubscription(param$)
    }

    ngOnDestroy(): void {
        this.unsubscribes()
    }

}
