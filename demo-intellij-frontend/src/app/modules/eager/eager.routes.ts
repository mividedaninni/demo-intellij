import {Routes} from "@angular/router";
import {EagerComponent} from "./eager.component";
import {EagerResolver} from "./eager.resolver";

export const eagerRoutes: Routes = [
    {
        path: `eager`,
        component: EagerComponent,
        resolve: {
            datenqualitat: EagerResolver
        },
        runGuardsAndResolvers: 'always',
    }
];
