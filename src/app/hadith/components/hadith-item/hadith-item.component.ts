import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    templateUrl: 'hadith-item.component.html',
    styleUrls: ['hadith-item.component.scss']
})
export class HadithItemComponent implements OnInit {
    state = {
        hadith: null
    }

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.state.hadith = this.route.snapshot.data['hadith']
    }
}
