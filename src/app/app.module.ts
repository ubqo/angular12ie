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
