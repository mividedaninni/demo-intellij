import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WrapComponent} from "./modules/wrap/wrap.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: WrapComponent,
        children: [
            {
                path: 'lazy',
                loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule)
            }
        ]
    },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
    appRoutes,
    {useHash: true, onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy'}
);
