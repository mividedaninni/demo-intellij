import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LazyRoutingModule} from './lazy-routing.module';
import {LazyComponent} from './lazy.component';
import {LazyResolver} from "./lazy.resolver";


@NgModule({
    declarations: [
        LazyComponent
    ],
    imports: [
        CommonModule,
        LazyRoutingModule
    ],
    providers: [LazyResolver]
})
export class LazyModule {
}
