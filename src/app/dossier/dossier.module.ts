import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './dossier.routes';
import {DossierPageComponent} from './dossier-page/dossier-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {DossierToolbarComponent} from './dossier-toolbar/dossier-toolbar.component';


@NgModule({
	declarations: [
		DossierPageComponent,
		DossierToolbarComponent
	],
	imports: [
		RouterModule.forChild(routes),
		MatToolbarModule,
		MatButtonModule
	],
	providers: [],
})
export class DossierModule {
}
