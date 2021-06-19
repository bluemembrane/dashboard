import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as LightweightCharts from 'lightweight-charts';
import spiritSwaps from './spirit-swaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('priceIn') priceIn: ElementRef<HTMLElement>;
  @ViewChild('priceOut') priceOut: ElementRef<HTMLElement>;
  @ViewChild('amountIn') amountIn: ElementRef<HTMLElement>;
  @ViewChild('amountOut') amountOut: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    LightweightCharts
      .createChart(this.priceIn.nativeElement, { width: 400, height: 300 })
      .addLineSeries()
      .setData(spiritSwaps.map((s) => {
        return {
          time: s.tx_date.split(' ')[0],
          value: s.price0
        }
     }));
     
    LightweightCharts
    .createChart(this.priceOut.nativeElement, { width: 400, height: 300 })
    .addLineSeries()
    .setData(spiritSwaps.map((s) => {
      return {
        time: s.tx_date.split(' ')[0],
        value: s.price1
      }
   }));

   LightweightCharts
     .createChart(this.amountIn.nativeElement, { width: 400, height: 300 })
     .addLineSeries()
     .setData(spiritSwaps.map((s) => {
       return {
         time: s.tx_date.split(' ')[0],
         value: s.value0_in_usd !== '0' ? s.value0_in_usd : s.value1_in_usd
       }
    }));
    
    LightweightCharts
      .createChart(this.amountOut.nativeElement, { width: 400, height: 300 })
      .addLineSeries()
      .setData(spiritSwaps.map((s) => {
        return {
          time: s.tx_date.split(' ')[0],
          value: s.value0_out_usd !== '0' ? s.value0_out_usd : s.value1_out_usd
        }
     }));
  }
}
