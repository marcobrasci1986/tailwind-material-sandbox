import {DossierPageComponent} from './dossier-page/dossier-page.component';
import {Route} from '@angular/router';
import {
	DossierListContainerComponent
} from './dossier-list/container/dossier-list-conainer/dossier-list-container.component';

export const routes: Route[] = [
	{
		path: 'dossier', // path = /dossier
		component: DossierPageComponent,
		children: [
			{
				path: '', // Default path when no child path is specified
				redirectTo: 'list',
				pathMatch: 'full' // redirects /dossier to /dossier/list as a default
			},
			{
				path: 'list', // path = /dossier/list
				component: DossierListContainerComponent, // Can we lazy load this?
			}
		]
	},
];
