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
var notes_form_component_1 = require('./notes-form.component');
var categories_component_1 = require('../categories/categories.component');
var notes_service_1 = require('./notes-service');
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
var NotesComponent = (function () {
    function NotesComponent(notesService) {
        this.notesService = notesService;
        this.title = 'List of notes';
        //notes = NOTES;
        this.categories = categories_component_1.CATEGORIES;
        this.modNote = new Note(0, "", "", Date.now(), new categories_component_1.Category(""));
        this.clearModal();
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.loadNotes();
    };
    NotesComponent.prototype.loadNotes = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (data) { _this.notes = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.notes); });
    };
    NotesComponent.prototype.clearModal = function () {
        this.modNote = new Note(0, "", "", Date.now(), new categories_component_1.Category(""));
    };
    NotesComponent.prototype.openEmptyFormNote = function () {
        this.clearModal();
        this.modalFormNote.open();
    };
    NotesComponent.prototype.openFormNote = function (note) {
        this.clearModal();
        this.modNote = note;
        //this.notesFormComponent.setFormValues();
        this.modalFormNote.open();
    };
    NotesComponent.prototype.dismissFormNote = function () {
        this.clearModal();
        this.modalFormNote.dismiss();
    };
    NotesComponent.prototype.openDeleteNote = function () {
        this.clearModal();
        this.modalDeleteNote.open();
    };
    NotesComponent.prototype.dismissDeleteNote = function () {
        this.clearModal();
        this.modalDeleteNote.dismiss();
    };
    __decorate([
        core_1.ViewChild(notes_form_component_1.NotesFormComponent), 
        __metadata('design:type', notes_form_component_1.NotesFormComponent)
    ], NotesComponent.prototype, "notesFormComponent", void 0);
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
            templateUrl: './app/notes/notes.component.html',
            providers: [notes_service_1.NotesService]
        }), 
        __metadata('design:paramtypes', [notes_service_1.NotesService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map