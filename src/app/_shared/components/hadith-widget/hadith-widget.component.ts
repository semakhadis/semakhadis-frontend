import { HadithService } from 'Services/hadith.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ComponentUtilitiesService } from 'Services/component-utilities.service'

@Component({
    selector: 'v-hadith-widget',
    templateUrl: 'hadith-widget.component.html',
    styleUrls: [ 'hadith-widget.component.scss' ]
})
export class HadithWidgetComponent extends ComponentUtilitiesService implements OnInit, OnDestroy {
    HADITH_CAROUSEL = HADITH_CAROUSEL

    state = {
        hadiths: []
    }

    meta = {
        isError: false,
        isLoading: false,
    }

    constructor(private hadithService: HadithService) {
        super()
    }

    ngOnInit(): void {

        this.meta.isLoading = true

        const fetchHadiths$ =
            this.hadithService.fetchHadiths()
                .finally(() => this.meta.isLoading = false)
                .subscribe(hadiths => this.state.hadiths = hadiths)

        this.addSubscription(fetchHadiths$)
    }

    ngOnDestroy(): void {
        this.unsubscribes()
    }
}

const HADITH_CAROUSEL = {
    grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
    easing: 'ease-in',
    slide: 4,
    speed: 400,
    interval: 4000,
    point: {
        visible: true
    },
    load: 2,
    touch: true,
    loop: true,
    custom: 'banner'
}
