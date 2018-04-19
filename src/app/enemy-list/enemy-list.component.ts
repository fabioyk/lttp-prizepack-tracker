import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enemy-list',
  templateUrl: './enemy-list.component.html',
  styleUrls: ['./enemy-list.component.css']
})
export class EnemyListComponent implements OnInit {
  @Input() prizePackNumber:number;
  enemyImageUrl:string;

  constructor() { }

  ngOnInit() {
    if (this.prizePackNumber) {
      this.enemyImageUrl = 'assets/pack' + this.prizePackNumber + '.png';
    }    
  }

}
