import {NgModule} from '@angular/core';
import {DossierListModule} from './dossier-list/dossier-list.module';
import {RouterModule} from '@angular/router';
import {routes} from './dossier.routes';


@NgModule({
	declarations: [],
	imports: [
		DossierListModule,
		RouterModule.forChild(routes),
	],
	providers: [],
})
export class DossierModule {
}
