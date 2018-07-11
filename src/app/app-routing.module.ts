import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MenuComponent } from './menu/menu.component';
import { RouterComponent } from './router/router.component';
import { SwitchComponent } from './switch/switch.component';
import { Layer3Component } from './layer3/layer3.component';
import { VlanComponent } from './vlan/vlan.component';

const routes: Routes = [
 
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'router',
    component: RouterComponent
  },
  {
    path: 'switch',
    component: SwitchComponent
  },
  {
    path: 'layer3',
    component: Layer3Component
  },
  {
    path: 'vlan',
    component: VlanComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
