import { Injectable } from '@angular/core';

@Injectable()
export class SandhaiService {

  sandhaiDistrictList = [
      {
        "name":"Ariyalur",
        "sandhais": [
        {
          "name" : "Ariyalur",
          "fullPostalAddr" : {
            "address1" : "Jayankondam Road",
            "city" : "Ariyalur"
          },
          "contact" : {
            "name" : "K.Ravichandran",
            "designation" : "DAO",
            "contactNumber" : "4329-294202"
          }
        },
        {
          "name" : "Jayankondam",
          "fullPostalAddr" : {
            "address1" : "Ariyalur Road",
            "address2" : "Jayankondam(po)",
            "city" : "Ariyalur",
            "pincode" : "621802"
          },
          "contact" : {
            "name" : "A. Rajangam",
            "designation" : "AO",
            "contactNumber" : "8883461009"
          }
        }
      ]
    },
    {
      "name":"Coimbatore",
      "sandhais": [
        {
          "name" : "R.S. Puram",
          "fullPostalAddr" : {
            "address1" : "R.S. Puram Uzhavar Sandhai",
            "address2" : "Cowley Brown Road, R.S. Puram",
            "city" : "Coimbatore",
            "pincode" : "641002"
          },
          "contact" : {
            "name" : "K. Annapurani",
            "designation" : "AO",
            "contactNumber" : "9486123022"
          }
        },
        {
          "name" : "Singanallur",
          "fullPostalAddr" : {
            "address1" : "Singanallur Uzhavar Sandhai",
            "address2" : "Trichy Road",
            "city" : "Singanallur, Coimbatore",
            "pincode" : ""
          },
          "contact" : {
            "name" : "S. Hilda",
            "designation" : "AO",
            "contactNumber" : "9629329233"
          }
        },
        {
          "name" : "Pollachi",
          "fullPostalAddr" : {
            "address1" : "Pollachi Uzhavar Sandhai",
            "address2" : "Palaghat Road, Near Municipality Office",
            "city" : "Pollachi",
            "pincode" : "642001"
          },
          "contact" : {
            "name" : "M. Rengarajan",
            "designation" : "DAO",
            "contactNumber" : "9442180343"
          }
        },
        {
          "name" : "Mettupalayam",
          "fullPostalAddr" : {
            "address1" : "Mettupalayam Uzhavar Sandhai",
            "address2" : "Near Veterinary Hospital",
            "city" : "Mettupalayam",
            "pincode" : "641301"
          },
          "contact" : {
            "name" : "G. Rengaraju",
            "designation" : "DAO",
            "contactNumber" : "8220496789"
          }
        },
        {
          "name" : "Vadavalli",
          "fullPostalAddr" : {
            "address1" : "Vadavalli Uzhavar Sandhai",
            "address2" : "VNR Nagar",
            "city" : "Coimbatore",
            "pincode" : "41"
          },
          "contact" : {
            "name" : "G. Rengarajan(I/c)",
            "designation" : "DAO",
            "contactNumber" : "8220496789"
          }
        }
      ]
    }
  ];

  getSandhaiList(){
    return this.sandhaiDistrictList;
  }
}
