import * as format from 'date-fns/format';
import { Pipe, PipeTransform } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import * as differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';

const MORE_THAN_NO_OF_WEEKS = 1;

@Pipe({ name: 'differenceInCalendarWeeks' })
export class DistanceInWordsToNowPipe implements PipeTransform {

    currentDate: Date = null;

    transform(date: string, options: boolean = true): string {

        if (this.currentDate === null) {
            this.currentDate = new Date();
        }

        return differenceInCalendarWeeks(this.currentDate, date) > MORE_THAN_NO_OF_WEEKS
            ? format(date, 'MM/DD/YYYY')
            : distanceInWordsToNow(date, { addSuffix: options });
    }

}
