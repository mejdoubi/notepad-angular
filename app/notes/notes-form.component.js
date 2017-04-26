"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notes_component_1 = require('./notes.component');
var categories_component_1 = require('../categories/categories.component');
var forms_1 = require('@angular/forms');
var NotesFormComponent = (function () {
    function NotesFormComponent(fb) {
        this.fb = fb;
        this.closeModalNote = new core_1.EventEmitter();
        this.categories = categories_component_1.CATEGORIES;
        this.title = new forms_1.FormControl("", forms_1.Validators.required, forms_1.Validators.minLength(4));
        this.content = new forms_1.FormControl("", forms_1.Validators.required);
        this.date = new forms_1.FormControl("", forms_1.Validators.required);
        this.category = new forms_1.FormControl("", forms_1.Validators.required);
        this.createForm();
    }
    NotesFormComponent.prototype.modDate = function (modDate) {
        return modDate.toISOString().substring(0, 10);
    };
    NotesFormComponent.prototype.setFormValues = function () {
        this.noteForm.setValue({
            title: this.modNote.title,
            content: this.modNote.content,
            date: this.modNoteDate,
            category: this.modNote.category
        });
    };
    NotesFormComponent.prototype.createForm = function () {
        this.noteForm = this.fb.group({
            title: this.title,
            content: this.content,
            date: this.date,
            category: this.category
        });
    };
    NotesFormComponent.prototype.dismissFormNote = function () {
        this.closeModalNote.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', notes_component_1.Note)
    ], NotesFormComponent.prototype, "modNote", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Date)
    ], NotesFormComponent.prototype, "modNoteDate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotesFormComponent.prototype, "closeModalNote", void 0);
    NotesFormComponent = __decorate([
        core_1.Component({
            selector: 'notes-form',
            templateUrl: './app/notes/notes-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], NotesFormComponent);
    return NotesFormComponent;
}());
exports.NotesFormComponent = NotesFormComponent;
//# sourceMappingURL=notes-form.component.js.map