import { NgModule } from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe, CurrencyPipe],
  exports: [TimeAgoPipe, CurrencyPipe],
})
export class SharedPipeModule {}
