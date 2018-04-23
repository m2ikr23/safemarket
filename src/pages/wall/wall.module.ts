import { CustomHeaderComponent } from './../../components/custom-header/custom-header';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallPage } from './wall';

@NgModule({
  declarations: [
    WallPage,
    CustomHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(WallPage),
  ],
})
export class WallPageModule {}
