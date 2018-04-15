import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    templateUrl: 'hadith-item.component.html',
    styleUrls: ['hadith-item.component.scss']
})
export class HadithItemComponent implements OnInit {
    state = {
        hadith: null,
        related_hadiths: [
            {
                id: 21,
                title:
                    'Barangsiapa berhaji ke Baitullah dan tidak menziarahiku. Barangsiapa berhaji ke Baitullah dan tidak menziarahiku, sungguh dia telah berlaku tidak sopan padaku',
                status_hadith: 'Palsu',
                'pengkaji-hadis': '',
                text_arab: 'من حج البيت ولم يزرني فقد جفاني',
                text_melayu:
                    'Barangsiapa berhaji ke Baitullah dan tidak menziarahiku, sungguh dia telah berlaku tidak sopan padaku',
                komentar_ulama: '',
                slug: 'barangsiapa-berhaji-ke-baitullah-dan-tidak-menziarahiku',
                semakhadis_link:
                    'http://semakhadis.com/barangsiapa-berhaji-ke-baitullah-dan-tidak-menziarahiku',
                rujukan: [
                    'Tartibul Maudhu’at (600)',
                    'Al-Fawaid al-Majmu’ah (326)'
                ],
                status: 'pending | draft | approved',
                author: {
                    id: 13,
                    name: '',
                    role: ''
                },
                updated_at: '2018-03-24T07:01:43.056Z',
                created_at: '2018-03-24T07:01:43.056Z',
                approved_by: 23,
                approved_at: '',
                social_medias: [
                    {
                        media: 'Facebook',
                        count: 1
                    },
                    {
                        media: 'email',
                        count: 2
                    },
                    {
                        media: 'Whatsapp',
                        count: 3
                    },
                    {
                        media: 'Telegram',
                        count: 5
                    },
                    {
                        media: 'Twitter',
                        count: 4
                    }
                ],
                tag: []
            },
            {
                id: 20,
                title: 'Bila mana telah sampai pada sebuah majlis',
                status_hadith: 'Hasan',
                perawi: 'Abu Hurairah',
                'pengkaji-hadis': '',
                text_arab:
                    'إذا انتهَى أحدُكم إلى مجلِسٍ فليسلِّم، فإنَّ بَدا له أن يجلِسَ فليجلِس، ثمَّ إذا قامَ فليسلِّم فلَيسَتِ الأولَى بأحقِّ من الآخرةِ',
                text_melayu:
                    'Bila mana telah sampai pada sebuah majlis hendaklah mengucapkan salam, dan apabila ingin duduk maka duduklah, kemudian apabila ingin pergi maka ucaplah salam, sebab bukankah yang pertama itu lebih berhak daripada yang terakhir.',
                komentar_ulama: '',
                slug: 'bila-mana-telah-sampai-pada-sebuah-majlis',
                semakhadis_link:
                    'http://semakhadis.com/bila-mana-telah-sampai-pada-sebuah-majlis',
                rujukan: [
                    'At-Tirmizi, Sunan At-Tirmizi, hal 2706',
                    'http://hdith.com/?s=+%D8%A5%D8%B0%D8%A7+%D8%A7%D9%86%D8%AA%D9%87%D9%8E%D9%89+%D8%A3%D8%AD%D8%AF%D9%8F%D9%83%D9%85+%D8%A5%D9%84%D9%89+%D9%85%D8%AC%D9%84%D9%90%D8%B3%D9%8D+%D9%81%D9%84%D9%8A%D8%B3%D9%84%D9%91%D9%90%D9%85%D8%8C+%D9%81%D8%A5%D9%86%D9%91%D9%8E+%D8%A8%D9%8E%D8%AF%D8%A7+%D9%84%D9%87+%D8%A3%D9%86+%D9%8A%D8%AC%D9%84%D9%90%D8%B3%D9%8E+%D9%81%D9%84%D9%8A%D8%AC%D9%84%D9%90%D8%B3%D8%8C+%D8%AB%D9%85%D9%91%D9%8E+%D8%A5%D8%B0%D8%A7+%D9%82%D8%A7%D9%85%D9%8E+%D9%81%D9%84%D9%8A%D8%B3%D9%84%D9%91%D9%90%D9%85+%D9%81%D9%84%D9%8E%D9%8A%D8%B3%D9%8E%D8%AA%D9%90+%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%8E%D9%89+%D8%A8%D8%A3%D8%AD%D9%82%D9%91%D9%90+%D9%85%D9%86+%D8%A7%D9%84%D8%A2%D8%AE%D8%B1%D8%A9%D9%90'
                ],
                status: 'pending | draft | approved',
                author: {
                    id: 13,
                    name: '',
                    role: ''
                },
                updated_at: '2018-03-24T07:01:43.056Z',
                created_at: '2018-03-24T07:01:43.056Z',
                approved_by: 23,
                approved_at: '',
                social_medias: [
                    {
                        media: 'Facebook',
                        count: 1
                    },
                    {
                        media: 'email',
                        count: 2
                    },
                    {
                        media: 'Whatsapp',
                        count: 3
                    },
                    {
                        media: 'Telegram',
                        count: 5
                    },
                    {
                        media: 'Twitter',
                        count: 4
                    }
                ],
                tag: []
            },
            {
                id: 19,
                title: 'Tuhanku telah mendidikku dan membaikkan adabku',
                status_hadith: 'Tidak Sahih',
                perawi: '',
                'pengkaji-hadis': '',
                text_arab: 'أدَّبني ربي فأحسن تأديبي',
                text_melayu: 'Tuhanku telah mendidikku dan membaikkan adabku',
                komentar_ulama:
                    'Ulasan Syeikh Ihsan Al-‘Utaiby. قال ابن تيمية: لا يعرف له إسناد ثابت .”أحاديث القصاص” (78) .وأورده الشوكاني في “الفوائد المجموعة” (1020) . والفتني في “تذكرة الموضوعات” (87) .Kata Ibn Taimiyyah: Tidak diketahui bagi hadis ini sanad yang sabit (teguh).',
                slug: 'tuhanku-telah-mendidikku-dan-membaikkan-adabku',
                semakhadis_link:
                    'http://semakhadis.com/tuhanku-telah-mendidikku-dan-membaikkan-adabku',
                rujukan: [
                    'Ahaadiith Al-Qusos (78)',
                    'Al-Fattani dalam Tazkirah Al-Maudhu’aat (87).',
                    'As-Syawkani juga menyebut [tentangnya] dalam Al-Fawaaid Al-Majmu’ah (1020)'
                ],
                status: 'pending | draft | approved',
                author: {
                    id: 13,
                    name: '',
                    role: ''
                },
                updated_at: '2018-03-24T07:01:43.056Z',
                created_at: '2018-03-24T07:01:43.056Z',
                approved_by: 23,
                approved_at: '',
                social_medias: [
                    {
                        media: 'Facebook',
                        count: 1
                    },
                    {
                        media: 'email',
                        count: 2
                    },
                    {
                        media: 'Whatsapp',
                        count: 3
                    },
                    {
                        media: 'Telegram',
                        count: 5
                    },
                    {
                        media: 'Twitter',
                        count: 4
                    }
                ],
                tag: []
            }
        ]
    }

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.state.hadith = this.route.snapshot.data['hadith']
    }
}
