import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LazyComponent} from "./lazy.component";
import {LazyResolver} from "./lazy.resolver";

const routes: Routes = [{
    path: '',
    component: LazyComponent,
    resolve: {
        datenqualitat: LazyResolver
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRoutingModule {
}
