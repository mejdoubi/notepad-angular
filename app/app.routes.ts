import { Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { CategoriesComponent } from './categories.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'notes', pathMatch: 'full'},
	{ path: 'notes', component: NotesComponent},
	{ path: 'categories', component: CategoriesComponent}
];