import {DossierPageComponent} from './dossier-page/dossier-page.component';
import {Route} from '@angular/router';
import {
	DossierListContainerComponent
} from './dossier-list/container/dossier-list-conainer/dossier-list-container.component';

export const routes: Route[] = [
	{
		path: '', // /dossier
		component: DossierPageComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full' // redirects /dossier to /dossier/list
			},
			{
				path: 'list', // /dossier/list
				component: DossierListContainerComponent,
			}
		]
	},
];
