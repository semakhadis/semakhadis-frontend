import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { NgProgress } from 'ngx-progressbar'

@Component({
    selector: 'v-main-hadith',
    templateUrl: 'main-hadith.component.html',
    styleUrls: ['main-hadith.component.scss']
})
export class MainHadithComponent implements OnInit {
    state = { hadiths: [] }

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.state.hadiths = this.route.snapshot.data['hadiths']
    }
}
