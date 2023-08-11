import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { PriceService } from 'src/app/services/price.service';

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
  p: number = 1;
  constructor(public priceService: PriceService) {}

  ngOnInit() {
    // return array from bank.gov.ua and include to arr$ stream
    this.arr$ = this.priceService.getPrice();
  }

  // sort function by name, symbol, rate and r030
  sortName(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
