import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode(); // enable angular production mode
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory); // bootstraps the app when in production
