import { NgxCarousel } from 'ngx-carousel'
import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'v-kitab-widget',
    templateUrl: 'kitab-widget.component.html',
    styleUrls: ['kitab-widget.component.scss']
})
export class KitabWidgetComponent implements OnInit {
    public kitabCarousel: NgxCarousel
    state = {
        kitabs: [
            {
                name: 'Al-Manar Al-Munif',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 1'
            },
            {
                name: 'Al-Durr Al-Thamin',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 2'
            },
            {
                // tslint:disable-next-line:quotemark
                name: "Silsilah Al-Ahadith Al-Da'ifah",
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 3'
            },
            {
                // tslint:disable-next-line:quotemark
                name: "Tanzih Al-Shari'Ah",
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 4'
            },
            {
                name: '100 Hadis Lemah & Palsu',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 5'
            },
            {
                name: 'Hadis 40 Imam Nawawi',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 6'
            },
            {
                name: 'Hadis Bukhari',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 7'
            },
            {
                name: 'Al-Umm',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 8'
            },
            {
                name: 'Al-Abatil Wa al-Manakir Wa al-Sihah Wa al-Masyahir',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 9'
            },
            {
                name: 'Al-Mawdhu’at Min al-Ahadith al-Marfu’at',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 10'
            },
            {
                name: 'Al-Qawl al-Musaddad',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 11'
            },
            {
                name: 'Dzayl Al-Qawl al-Musaddad',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 12'
            },
            {
                name: 'Tartib al-Mawdhu’at',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 13'
            },
            {
                name: 'Al-La’ali’ al-Masnu’ah Fi al-Ahadith al-Mawdhu’ah',
                image: '../../assets/images/kitab.jpg',
                writer: 'Penulis 14'
            }
        ]
    }

    ngOnInit(): void {
        this.kitabCarousel = {
            grid: { xs: 2, sm: 6, md: 7, lg: 7, all: 0 },
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
