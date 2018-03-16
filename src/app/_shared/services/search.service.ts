import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class SearchService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        SearchService.base_url = ''
    }

}
