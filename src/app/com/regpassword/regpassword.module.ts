import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegpasswordPageRoutingModule } from './regpassword-routing.module';

import { RegpasswordPage } from './regpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegpasswordPageRoutingModule
  ],
  declarations: [RegpasswordPage]
})
export class RegpasswordPageModule {}
