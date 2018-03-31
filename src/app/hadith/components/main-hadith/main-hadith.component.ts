import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    templateUrl: './main-hadith.component.html',
    styleUrls: ['./main-hadith.component.scss']
})
export class MainHadithComponent implements OnInit {
    state = { hadiths: [] }

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.state.hadiths = this.route.snapshot.data['hadiths']
    }
}
