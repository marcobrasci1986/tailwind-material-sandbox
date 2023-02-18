import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DossierListContainerComponent} from './container/dossier-list-conainer/dossier-list-container.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
	declarations: [
		DossierListContainerComponent
	],
	imports: [
		CommonModule,
		MatTableModule,
		MatToolbarModule,
		MatButtonModule
	]
})
export class DossierListModule {
}
