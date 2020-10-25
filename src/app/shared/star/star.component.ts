import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starPercent: string;

  constructor() { }
  ngOnChanges(): void {
    this.starPercent = (this.rating * 80 / 5) + 'px';
    // this.starPercent = '100px';
  }

}
