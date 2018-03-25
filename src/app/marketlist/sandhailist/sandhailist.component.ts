import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { SandhaiService} from '../../service/sandhai.service';

@Component({
  selector: 'app-sandhailist',
  templateUrl: './sandhailist.component.html',
  styleUrls: ['./sandhailist.component.css'],
  providers :[SandhaiService] 
})
export class SandhailistComponent implements OnInit {

  districtName: string;
  currentDistrictSandhaiList: any[];

  constructor(private sandhaiService: SandhaiService,
              private route: ActivatedRoute) {
    console.log(sandhaiService.getSandhaiList());
   }

  ngOnInit() {
    console.log('params....');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.districtName = params['districtName'];
          this.currentDistrictSandhaiList = this.sandhaiService.getSandhaiList().filter(district => district.name === this.districtName)[0].sandhais;
          console.log(params);
        }
      );
    console.log('params!!!');
  }

  getSandhaiList(){
    //console.log('aaa '+  JSON.stringify(this.sandhaiService.getSandhaiList().filter(district => district.name === 'Ariyalur')));
    //console.log('bbb '+  this.sandhaiService.getSandhaiList().filter(district => district.name === 'Ariyalur')[0].sandhais);
    return this.currentDistrictSandhaiList;
  }

  getSandhaiTempList(indexVal: number){
    console.log(indexVal);
    return this.currentDistrictSandhaiList.slice().splice(indexVal,2);
  }
}
