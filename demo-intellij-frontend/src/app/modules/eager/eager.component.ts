import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EagerResolver} from "./eager.resolver";

@Component({
    selector: 'eager',
    templateUrl: './eager.component.html'
})
export class EagerComponent {

    public datenqualitat: Array<DatenqualitatDto>;

    constructor(private activatedRoute: ActivatedRoute) {
        this.datenqualitat = this.activatedRoute.snapshot.data[EagerResolver.RESOLVES];
    }

}
