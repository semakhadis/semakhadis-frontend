import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { ApiService } from 'Services/api.service'

@Injectable()
export class HadithService extends ApiService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        super()

        HadithService.base_url = `${this.base_url}/hadith`
    }

    fetchHadith = (): Observable<any> => this.http.get(HadithService.base_url)

    createHadith = (payload: any): Observable<any> => this.http.post(HadithService.base_url, payload)

}
