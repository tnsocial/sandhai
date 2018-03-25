import { Injectable } from '@angular/core';

@Injectable()
export class SandhaiService {

  sandhaiList = [
    {
      name: 'Ariyalur Sandhai 1',
      contact: {
        name: '1_contact_name',
        phone:'1_phone'
      }
    },
    {
      name: 'Ariyalur Sandhai 2',
      contact: {
        name: '2_contact_name',
        phone:'2_phone'
      }
    },
    {
      name: 'Ariyalur Sandhai 3',
      contact: {
        name: '3_contact_name',
        phone:'3_phone'
      }
    },
    {
      name: 'Ariyalur Sandhai 4',
      contact: {
        name: '4_contact_name',
        phone:'4_phone'
      }
    }
  ];

  getSandhaiList(){
    return this.sandhaiList;
  }
}
