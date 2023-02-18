import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		MatSlideToggleModule,
		MatIconModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule {
}
