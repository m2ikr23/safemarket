import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { WallPage } from './../pages/wall/wall';
import { CustomHeaderComponent } from './../components/custom-header/custom-header';
import {Ionic2RatingModule} from 'ionic2-rating';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioServicio } from './../servicios/usuarios/usuario.service';
import { PerfilPage } from '../pages/perfil/perfil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    ListPage,
    RegistroPage,
    LoginPage,
    WallPage,
    CustomHeaderComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    RegistroPage,
    LoginPage,
    WallPage,
  ],
  providers: [
    UsuarioServicio,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
