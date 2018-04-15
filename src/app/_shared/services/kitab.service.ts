import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { ApiService } from 'Services/api.service'

@Injectable()
export class KitabService extends ApiService {

    private static base_url: string = ''

    constructor(private http: HttpClient) {
        super()

        KitabService.base_url = `${this.base_url}/kitab`
    }

    fetchKitabs = (): Observable<any> => this.http.get(KitabService.base_url)

    fetchKitab = (slug: string): Observable<any> => this.http.get(`${KitabService.base_url}?slug=${slug}`)

    createKitab = (payload: any): Observable<any> => this.http.post(KitabService.base_url, payload)
}
