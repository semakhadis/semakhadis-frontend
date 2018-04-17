import { Observable } from 'rxjs/Observable'

function apply(functions: Array<Function>) {
    functions = [].concat(functions);

    return functions.reduce((observable, func) => func(observable));
}

Observable.prototype.apply = apply

declare module 'rxjs/Observable' {
    interface Observable<T> {
        apply: typeof apply;
    }
}

