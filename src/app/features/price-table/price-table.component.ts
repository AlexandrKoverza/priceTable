import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subscription,
  concatMap,
  delay,
  map,
  of
} from 'rxjs';
import { PriceService } from 'src/app/services/price.service';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceTableComponent implements OnInit {
  arr$: Observable<any[]> = of([]);
  key: string = 'txt';
  reverse: boolean = false;
  page: number = 1;
  subject = webSocket(
    'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin'
  );
  rate: any;

  constructor(public priceService: PriceService) {}

  ngOnInit() {
    // return array from bank.gov.ua and include to arr$ stream
    this.arr$ = this.priceService.getPrice();
    this.subject.subscribe(data => {
      this.rate = data;
      console.log(this.rate);
    });
  }

  // sort function by name, symbol, rate and r030
  sortName(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
