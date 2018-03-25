import { Component, OnInit } from '@angular/core';
import { SandhaiService} from '../service/sandhai.service';

@Component({
  selector: 'app-marketlist',
  templateUrl: './marketlist.component.html',
  styleUrls: ['./marketlist.component.css'],
  providers :[SandhaiService]
})
export class MarketlistComponent implements OnInit {

  constructor(private sandhaiService: SandhaiService) { }

  ngOnInit() {
  }

  getSandhaiList(){
    return this.sandhaiService.getSandhaiList();
  }

}
