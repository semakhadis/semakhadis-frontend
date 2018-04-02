import { Component } from '@angular/core'
import { ToastService } from 'Services/toast.service'
import { HadithService } from 'Services/hadith.service'

@Component({
    templateUrl: 'create-hadith.component.html',
    styleUrls: [ 'create-hadith.component.scss' ]
})
export class CreateHadithComponent {

    state = {
        title: '',
        perawi: '',
        textArab: '',
        textMelayu: '',
        komentar_ulama: '',
    }

    meta = {
        editorConfig,
        isError: false,
        isLoading: false,
    }

    constructor(private hadith: HadithService,
                private toastService: ToastService) {
    }

    submit = () => {
        this.meta.isLoading = true

        const payload = {
            ...this.state,
            rujukan: [],
            status: 'pending',
            author: {
                id: 13,
                name: '',
                role: ''
            },
            status_hadith: 'asdasd',
            slug: 'asdasdasdasd',
            updated_at: new Date(),
            created_at: new Date(),
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

        return this.hadith.createHadith(payload)
                   .finally(() => this.meta.isLoading = false)
                   .subscribe(
                       res => {
                           console.log(res)
                           this.toastService.success({ title: 'Success', msg: 'Hadith berjaya disimpan' })
                       },
                       err => {
                           console.error(err)
                           this.toastService.error({ title: 'Error', msg: 'Tidak berjaya simpan hadith' })
                       }
                   )
    }
}

const editorConfig = {
    minWidth: '0',
    width: 'auto',
    height: 'auto',
    editable: true,
    spellcheck: true,
    translate: 'yes',
    showToolbar: true,
    minHeight: '300px',
    enableToolbar: true,
    placeholder: 'Enter text here...',
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript' ],
        // ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        [ 'cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo' ],
        [ 'paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList' ],
        [ 'link', 'unlink', 'image' ],
        [ 'code' ]
    ]
};
