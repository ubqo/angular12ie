import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    SourceComponent,
    DestinationComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: SourceComponent
    },
    {
        path: 'destination',
        component: DestinationComponent
    },    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
