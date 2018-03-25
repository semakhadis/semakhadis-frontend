import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    template: `
        <ng-container *ngFor="let hadith of state.hadiths">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ hadith.title }} - {{ hadith.status_hadith }}</h5>
                    <p class="card-text">{{ hadith.text_arab }}</p>
                    <p class="card-text">{{ hadith.text_melayu }}</p>
                    <p class="card-text">{{ hadith.komentar_ulama }}</p>
                    <p class="card-subtitle mb-2">{{ hadith.description }}</p>
                    
                    <ul *ngFor="let reference of hadith.rujukan">
                        <li>{{ reference }}</li>
                    </ul>
                    
                </div>
            </div>
            <hr>
        </ng-container>
    `,
})
export class MainHadithComponent implements OnInit {

    state = { hadiths: [] }

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.state.hadiths = this.route.snapshot.data[ 'hadiths' ]
    }
}
