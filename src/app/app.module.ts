import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwingModule } from 'angular2-swing';
import {Application} from './app.component';
import {NgModule, ErrorHandler} from '@angular/core';
import {Storage} from '@ionic/storage';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {COMPONENTS, PROVIDERS} from '../const';

/**
 * AppModule is used for configuring the whole environment,
 * setting up every module, provider and component required
 * to make the app to work.
 * @class {AppModule}
 */
@NgModule({
    declarations: [ Application, ...COMPONENTS],
    entryComponents: COMPONENTS,
    imports: [
        BrowserModule,
        FormsModule,
        SwingModule,
        IonicModule.forRoot(Application)
    ],
    bootstrap: [IonicApp],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Storage,
        ...PROVIDERS
    ]
})
export class AppModule {}