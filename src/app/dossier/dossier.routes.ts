import {DossierPageComponent} from './dossier-page/dossier-page.component';
import {Route} from '@angular/router';

export const routes: Route[] = [
	{
		path: '', // path = /dossier
		component: DossierPageComponent,
		children: [
			{
				path: '', // Default path when no child path is specified
				redirectTo: 'list',
				pathMatch: 'full' // redirects /dossier to /dossier/list as a default
			},
			{
				path: 'list', // path = /dossier/list
				loadChildren: () => import('./dossier-list/dossier-list.module').then(m => m.DossierListModule)
			}
		]
	},
];
