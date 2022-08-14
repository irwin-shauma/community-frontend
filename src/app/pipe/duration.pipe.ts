import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import 'moment-duration-format'

@Pipe({
    name : 'secondToMonth'
})

export class SecondToMonthPipe implements PipeTransform{

    transform(value : any) {

        let copyValue : number = Number(value)
        if(value <2){
            return moment.duration(value, 'seconds').format('M [month]');
        } else {
            return moment.duration(value, 'seconds').format('M [months]');
        }
    }
}