import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {routing} from "./app.routes";
import {WrapComponent} from './modules/wrap/wrap.component';
import {CommonModule} from "@angular/common";
import {EagerModule} from "./modules/eager/eager.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [AppComponent, WrapComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        EagerModule,
        NgbModule,
        routing,
    ],
    providers: []
})

export class AppModule {
    constructor() {
    }
}
