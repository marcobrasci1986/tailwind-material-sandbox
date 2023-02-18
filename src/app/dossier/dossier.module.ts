import {NgModule} from '@angular/core';
import {DossierListModule} from './dossier-list/dossier-list.module';
import {RouterModule} from '@angular/router';
import {routes} from './dossier.routes';
import {DossierPageComponent} from './dossier-page/dossier-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
	declarations: [
		DossierPageComponent
	],
	imports: [
		DossierListModule,
		RouterModule.forChild(routes),
		MatToolbarModule,
		MatButtonModule
	],
	providers: [],
})
export class DossierModule {
}
