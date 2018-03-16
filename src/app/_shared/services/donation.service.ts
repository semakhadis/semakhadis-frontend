import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DonationService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        DonationService.base_url = ''
    }

}
