import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DossierModule} from './dossier/dossier.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSlideToggleModule,
		MatIconModule,
		MatToolbarModule,
		BrowserAnimationsModule,

		DossierModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
