import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
  @Input() itemName:string;
  itemImageUrl:string;

  constructor() { }

  ngOnInit() {
    if (this.itemName) {
      this.itemImageUrl = 'assets/drops/' + this.itemName + '.png';
    }    
  }

}
