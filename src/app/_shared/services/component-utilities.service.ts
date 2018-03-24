import { Subscription } from 'rxjs/Subscription'

export class ComponentUtilitiesService {

    protected subs: Subscription[] = [];

    /**
     * push subscriptions in array
     * @param {Subscription} obs
     * @returns {any[]}
     */
    addSubscription = (...obs: Subscription[]): void => {
        this.subs = [ ...this.subs, ...obs ];
    }

    /**
     * Unsubscribes all subscriptions
     */
    unsubscribes = (): void => this.subs.forEach(sub => sub.unsubscribe());

}
