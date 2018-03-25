import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

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
export class MainReferenceComponent implements OnInit {

    state = { references: [] }

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.state.references = this.route.snapshot.data[ 'references' ]
    }

}
