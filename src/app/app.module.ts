import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import {
    SourceComponent,
    DestinationComponent
} from './components';

/**
     * COMMENT OUT TO FIX ISSUE
     * src/app.module.ts - comment out global declaration
     * src/app.module.ts - comment out global provider
     * assets/scripts/analytics.js - comment out all javascript code
     * src/app/components/first/first.component.ts - comment out call to analytics
     * src/app/components/second/second.component.ts - comment out call to analytics
     * RUN on IE, which will work
     */
declare global {
    interface Window { analytics: any; }
}

@NgModule({
    declarations: [
        AppComponent,
        SourceComponent,
        DestinationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
    ],
    entryComponents: [],
    providers: [
        {
            provide: Window,
            useValue: window
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
