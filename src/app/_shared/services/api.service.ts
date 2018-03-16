import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        ApiService.base_url = ''
    }

}
