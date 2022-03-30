import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {EagerResolver} from "./eager.resolver";
import {EagerComponent} from "./eager.component";
import {eagerRoutes} from "./eager.routes";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(eagerRoutes)
    ],
    declarations: [EagerComponent],
    providers: [EagerResolver]
})
export class EagerModule {
    constructor() {
    }
}
