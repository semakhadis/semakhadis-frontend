import { Injectable } from '@angular/core';
import { ToastOptions, ToastyConfig, ToastyService as ng2ToastyService } from 'ng2-toasty';

@Injectable()
export class ToastService {

    constructor(private toastyConfig: ToastyConfig,
                private ng2ToastyService: ng2ToastyService) {
        this.toastyConfig.theme = 'bootstrap';
    }

    private show(type: toasterType, options: ToastOptions = {
        title: 'Vega',
        showClose: true,
        timeout: 5000
    }) {
        this.ng2ToastyService[ type ](options);
    }

    info = (options: ToastOptions): void => this.show('info', options)
    wait = (options: ToastOptions): void => this.show('wait', options)
    error = (options: ToastOptions): void => this.show('error', options)
    success = (options: ToastOptions): void => this.show('success', options)
    warning = (options: ToastOptions): void => this.show('warning', options)
}

type toasterType = 'info' | 'success' | 'wait' | 'error' | 'warning';
