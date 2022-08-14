import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { SecondToMonthPipe } from './duration.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe, CurrencyPipe, SecondToMonthPipe],
  exports: [TimeAgoPipe, CurrencyPipe,SecondToMonthPipe],
})
export class SharedPipeModule {}
