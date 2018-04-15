import { Component } from '@angular/core'

@Component({
    templateUrl: 'main-kitab.component.html',
    styleUrls: ['main-kitab.component.scss']
})
export class MainKitabComponent {
    state = {
        kitabs: [
            {
                slug: 'nama-kitab',
                name: 'Al-Manar Al-Munif',
                image: '/assets/images/kitab-3.jpg',
                writer: 'Penulis 1'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-Durr Al-Thamin',
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 2'
            },
            {
                slug: 'nama-kitab',
                // tslint:disable-next-line:quotemark
                name: "Silsilah Al-Ahadith Al-Da'ifah",
                image: '/assets/images/kitab-2.jpg',
                writer: 'Penulis 3'
            },
            {
                slug: 'nama-kitab',
                // tslint:disable-next-line:quotemark
                name: "Tanzih Al-Shari'Ah",
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 4'
            },
            {
                slug: 'nama-kitab',
                name: '100 Hadis Lemah & Palsu',
                image: '/assets/images/kitab-2.jpg',
                writer: 'Penulis 5'
            },
            {
                slug: 'nama-kitab',
                name: 'Hadis 40 Imam Nawawi',
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 6'
            },
            {
                slug: 'nama-kitab',
                name: 'Hadis Bukhari',
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 7'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-Umm',
                image: '/assets/images/kitab-2.jpg',
                writer: 'Penulis 8'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-Abatil Wa al-Manakir Wa al-Sihah Wa al-Masyahir',
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 9'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-Mawdhu’at Min al-Ahadith al-Marfu’at',
                image: '/assets/images/kitab-3.jpg',
                writer: 'Penulis 10'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-Qawl al-Musaddad',
                image: '/assets/images/kitab-2.jpg',
                writer: 'Penulis 11'
            },
            {
                slug: 'nama-kitab',
                name: 'Dzayl Al-Qawl al-Musaddad',
                image: '/assets/images/kitab-3.jpg',
                writer: 'Penulis 12'
            },
            {
                slug: 'nama-kitab',
                name: 'Tartib al-Mawdhu’at',
                image: '/assets/images/kitab-2.jpg',
                writer: 'Penulis 13'
            },
            {
                slug: 'nama-kitab',
                name: 'Al-La’ali’ al-Masnu’ah Fi al-Ahadith al-Mawdhu’ah',
                image: '/assets/images/kitab.jpg',
                writer: 'Penulis 14'
            }
        ]
    }
}
