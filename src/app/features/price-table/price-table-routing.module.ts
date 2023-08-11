import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceTableComponent } from './price-table.component';

const routes: Routes = [{ path: '', component: PriceTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceTableRoutingModule { }
