import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPage } from './perfil';

import { CustomHeaderComponent } from './../../components/custom-header/custom-header';

@NgModule({
  declarations: [
    PerfilPage,
    CustomHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PerfilPageModule {}
