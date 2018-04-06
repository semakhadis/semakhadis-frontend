import 'rxjs/add/operator/finally'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import { ApiService } from 'Services/api.service'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class BabService extends ApiService {

    private static base_url: string = ''

    private babs = new BehaviorSubject<any>([]);
    private meta = new BehaviorSubject<any>({
        isError: false,
        isLoading: false,
    });

    babs$: Observable<any> = this.babs.asObservable();
    meta$: Observable<any> = this.meta.asObservable();

    constructor(private http: HttpClient) {
        super()

        BabService.base_url = `${this.base_url}/bab`
    }

    fetchBabs = () => {

        // is already fetch, then dont trigger another http
        if (!this.isBabsEmpty()) {
            return
        }

        this.meta.next({ isLoading: true, isError: false, })

        this.http.get(BabService.base_url)
            .finally(() => this.meta.next({ isLoading: true, isError: false, }))
            .subscribe(res => this.babs.next(res))
    }

    private isBabsEmpty = (): boolean => this.babs.getValue().length <= 0
}
