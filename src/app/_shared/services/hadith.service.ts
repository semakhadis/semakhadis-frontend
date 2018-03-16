import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HadithService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        HadithService.base_url = ''
    }

}
