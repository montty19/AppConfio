import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegpasswordPage } from './regpassword.page';

const routes: Routes = [
  {
    path: '',
    component: RegpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegpasswordPageRoutingModule {}
