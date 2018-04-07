import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    template: `
        hadith detail item works

        <pre>{{ state.hadith | json }}</pre>
    `,
})
export class HadithItemComponent implements OnInit {

    state = {
        hadith: null
    }

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.state.hadith = this.route.snapshot.data[ 'hadith' ]
    }
}
