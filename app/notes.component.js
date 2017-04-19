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
var categories_component_1 = require('./categories.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Note = (function () {
    function Note(id, title, content, date, category) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.category = category;
    }
    return Note;
}());
exports.Note = Note;
var NOTES = [
    { id: 1, title: "title1", content: "content1",
        date: new Date("2017-03-21"), category: new categories_component_1.Category("cat1") },
    { id: 2, title: "title2", content: "content2",
        date: new Date("2017-03-27"), category: new categories_component_1.Category("cat2") },
    { id: 3, title: "title3", content: "content3",
        date: new Date("2017-03-29"), category: new categories_component_1.Category("cat2") },
];
var NotesComponent = (function () {
    function NotesComponent() {
        this.title = 'List of notes';
        this.notes = NOTES;
        this.categories = categories_component_1.CATEGORIES;
        this.clearModal();
    }
    NotesComponent.prototype.clearModal = function () {
        this.modNote = new Note(0, "", "", new Date(), new categories_component_1.Category(""));
        this.modNoteDate = new Date();
    };
    NotesComponent.prototype.openEmptyFormNote = function () {
        this.clearModal();
        this.modalFormNote.open();
    };
    NotesComponent.prototype.openFormNote = function (note) {
        this.clearModal();
        this.modNote = note;
        this.modNoteDate = note.date;
        this.modalFormNote.open();
        //this.notesFormComponent.setFormValues();
    };
    NotesComponent.prototype.dismissFormNote = function () {
        this.clearModal();
        this.modalFormNote.dismiss();
    };
    NotesComponent.prototype.openDeleteNote = function () {
        this.modalDeleteNote.open();
    };
    NotesComponent.prototype.dismissDeleteNote = function () {
        this.modalDeleteNote.dismiss();
    };
    __decorate([
        core_1.ViewChild('formNote'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], NotesComponent.prototype, "modalFormNote", void 0);
    __decorate([
        core_1.ViewChild('deleteNote'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], NotesComponent.prototype, "modalDeleteNote", void 0);
    NotesComponent = __decorate([
        core_1.Component({
            selector: 'notepad-app',
            templateUrl: 'views/notes.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map