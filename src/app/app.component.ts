import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  pack5 = ['smallMagic', 'rupee', 'heart', '5arrows', 'smallMagic', 'bomb', 'rupee', 'heart'];
  pack6 = ['heart', 'fairy', 'fullMagic', 'redRupee', '8bomb', 'heart', 'redRupee', '10arrows'];
  current5 = 0;
  current6 = 0;

  ngOnInit() {
    
  }

  onClickPrize(pack, index) {
    if (pack === 5) {
      if (this.current5 === index) {
        this.current5++;        
      } else {
        this.current5 = index;
      }
    } else {
      if (this.current6 === index) {
        this.current6++;
      } else {
        this.current6 = index;
      }
    }
    if (this.current5 > 7) {
      this.current5 = 0;
    }
    if (this.current6 > 7) {
      this.current6 = 0;
    }
  }

  onAdvancePrize(pack) {
    if (pack === 5) {
      this.current5++;
    } else {
      this.current6++;
    }
    if (this.current5 > 7) {
      this.current5 = 0;
    }
    if (this.current6 > 7) {
      this.current6 = 0;
    }
  }

  getPackCoords(packN:number) {
    var px = 15;
    if (packN === 5) {
      px += this.current5*36;
    } else {
      px += this.current6*36;
    }
    return px + 'px';
  }
}
