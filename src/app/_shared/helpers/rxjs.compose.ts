import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/finally'
import 'rxjs/add/observable/empty'
import { Observable } from 'rxjs/Observable'

/**
 * Run `Finally` and `Catch`
 * @param {Function} onFinish
 * @param {(error: any) => any} onError
 * @returns {(source) => any}
 */
export const chainrxjs = (onFinish: Function, onError?: (error: any) => any) => source =>
    source.finally(() => onFinish())
          .catch(error => {
              onError && onError(error)
              return Observable.empty()
          });
