import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanalesPage } from './canales';

@NgModule({
  declarations: [
    CanalesPage,
  ],
  imports: [
    IonicPageModule.forChild(CanalesPage),
  ],
})
export class CanalesPageModule {}
