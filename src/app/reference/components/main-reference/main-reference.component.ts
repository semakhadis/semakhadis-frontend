import 'rxjs/add/operator/finally'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReferenceService } from 'Services/reference.service'
import { ComponentUtilitiesService } from 'Services/component-utilities.service'

@Component({
    template: `
        <ng-container *ngFor="let ref of state.references">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ ref.name }} - {{ ref.count }}</h5>
                    <p class="card-text">{{ ref.slug }}</p>
                    <p class="card-text">{{ ref.semakhadis_link }}</p>
                    <p class="card-subtitle mb-2">{{ ref.description }}</p>
                </div>
            </div>
            <hr> 
        </ng-container>
    `,
})
export class MainReferenceComponent extends ComponentUtilitiesService implements OnInit, OnDestroy {

    state = {
        references: []
    }

    meta = {
        isLoading: false,
        isError: false
    }

    constructor(private referenceService: ReferenceService) {
        super()
    }

    ngOnInit(): void {
        this.meta.isLoading = true

        const fetchReferences$ =
            this.referenceService.fetchReferences()
                .finally(() => this.meta.isLoading = false)
                .subscribe(
                    references => this.state.references = references,
                    console.error
                )

        this.addSubscription(fetchReferences$)
    }

    ngOnDestroy(): void {
        this.unsubscribes()
    }
}
