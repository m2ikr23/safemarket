import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import  {HttpClientModule} from '@angular/common/http'
 
import { CustomHeaderComponent } from './../components/custom-header/custom-header';
import {Ionic2RatingModule} from 'ionic2-rating';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsuarioServicio } from './../servicios/usuarios/usuario.service';
import { ListPage } from '../pages/list/list';
import { RegistroPage } from '../pages/registro/registro';
import { LoginPage } from './../pages/login/login';
import { WallPage } from './../pages/wall/wall';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { CanalesPage } from '../pages/canales/canales';
import { CanalModalPage } from './../pages/canal-modal/canal-modal';
import { UpdateUserPage } from './../pages/update-user/update-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    UpdateUserPage,
    ListPage,
    RegistroPage,
    LoginPage,
    WallPage,
    CanalesPage,
    CanalModalPage,
    CustomHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    UpdateUserPage,
    RegistroPage,
    LoginPage,
    CanalesPage,
    CanalModalPage,
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
