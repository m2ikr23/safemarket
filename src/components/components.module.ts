import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CustomHeaderComponent } from './custom-header/custom-header';
@NgModule({
	declarations: [CustomHeaderComponent],
	imports: [IonicModule],
	exports: [CustomHeaderComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
