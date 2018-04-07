import { NgxCarousel } from 'ngx-carousel'
import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'v-hadith-widget',
    templateUrl: 'hadith-widget.component.html',
    styleUrls: ['hadith-widget.component.scss']
})
export class HadithWidgetComponent implements OnInit {
    public hadithCarousel: NgxCarousel
    state = {
        hadiths: [
            {
                title:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                created_at: '2 days ago'
            },
            {
                title: 'Ragu pada imannya',
                created_at: '2 days ago'
            },
            {
                title: 'Tiada baginya iman dan islam',
                created_at: '2 days ago'
            },
            {
                title: 'Menukar kiblat',
                created_at: '2 days ago'
            },
            {
                title: 'Golongan hilang syafaat nabi',
                created_at: '2 days ago'
            },
            {
                title: 'Iman, rezeki, maut',
                created_at: '2 days ago'
            },
            {
                title: 'Iman yang nifaq',
                created_at: '2 days ago'
            },
            {
                title: 'Iman dan amal',
                created_at: '2018-04-06 03:33:43'
            }
        ]
    }

    ngOnInit(): void {
        this.hadithCarousel = {
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
    }
}
