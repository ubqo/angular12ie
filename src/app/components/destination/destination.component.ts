import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-destination',
    templateUrl: './destination.component.html',
    styleUrls: []
})
export class DestinationComponent implements OnInit {

    constructor(
        private http: HttpClient, 
        private route: ActivatedRoute, 
        private router: Router) { }

    ngOnInit() {
        /**
     * COMMENT OUT TO FIX ISSUE
     * src/app.module.ts - comment out global declaration
     * assets/scripts/analytics.js - comment out all javascript code
     * src/app/components/first/first.component.ts - comment out call to analytics
     * src/app/components/second/second.component.ts - comment out call to analytics
     * RUN on IE, which will work
     */
         window.analytics.page('Destination');     
    }
}
