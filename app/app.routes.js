"use strict";
var notes_component_1 = require('./notes/notes.component');
var categories_component_1 = require('./categories/categories.component');
exports.routes = [
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    { path: 'notes', component: notes_component_1.NotesComponent },
    { path: 'categories', component: categories_component_1.CategoriesComponent }
];
//# sourceMappingURL=app.routes.js.map