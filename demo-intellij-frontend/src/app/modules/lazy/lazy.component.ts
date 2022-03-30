import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LazyResolver} from "./lazy.resolver";

@Component({
    selector: 'lazy',
    templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {
    public datenqualitat: Array<DatenqualitatDto>;

    constructor(private activatedRoute: ActivatedRoute) {
        this.datenqualitat = this.activatedRoute.snapshot.data[LazyResolver.RESOLVES];
    }

    ngOnInit(): void {
    }

}
