import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRouter(){
    return this.http.get('assets/json/router.json')
  }
  getSwitch(){
    return this.http.get('assets/json/switch.json')
  }
  getLayer3Switch(){
    return this.http.get('assets/json/layer3switch.json')
  }
  getVLAN(){
    return this.http.get('assets/json/vlan.json')
  }
  getACL(){
    return this.http.get('assets/json/ACL.json')
  }
  getrouterRIP(){
    return this.http.get('assets/json/routerRIP.json')
  }
  getrouterOSPF(){
    return this.http.get('assets/json/routerOSPF.json')
  }
  getNATPAT(){
    return this.http.get('assets/json/NATPAT.json')
  }
}