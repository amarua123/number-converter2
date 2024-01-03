import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord',
  standalone: true
})
export class NumToWordPipe implements PipeTransform {
  SUB_20 = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  SUB_100 = [
      "", "", "Twenty", "Thirty", "Forty",
      "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  POW_10 = [
      "Hundred", "Thousand", "Million", "Billion" //, ...
  ];

  getSub1000(buf: string[], num: number): void {
      if (num >= 100) {
          const mod = num % 100;
          buf.push(this.SUB_20[(num - mod)/100], this.POW_10[0]);
          num = mod;
      }

      if (num >= 20) {
          const mod = num % 10;
          buf.push(this.SUB_100[(num - mod)/10]);
          num = mod;
      }

      if (num > 0) {
          buf.push(this.SUB_20[num]);
      }
  }

    numberToWords(num: number): string {
      if (num === 0) {
          return this.SUB_20[0];
      }

      const buf: string[] = [];
      for (let i = this.POW_10.length - 1; num >= 1000; --i) {
          const p = 1000**i;
          if (num >= p) {
              const mod = num % p;
              this.getSub1000(buf, (num - mod) / p);
              buf.push(this.POW_10[i]);
              num = mod;
          }
      }

      this.getSub1000(buf, num);
      return buf.join(" ");
    };
  transform(value: string, ...args: unknown[]): string {
    try{
      return this.numberToWords(parseInt(value));
    }catch(er){
      return "";
    }
  }

}
