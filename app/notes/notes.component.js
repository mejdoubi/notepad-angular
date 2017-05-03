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
var forms_1 = require('@angular/forms');
var categories_component_1 = require('../categories/categories.component');
var notes_service_1 = require('./notes-service');
var categories_service_1 = require('../categories/categories-service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Note = (function () {
    function Note(id, title, content, category) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
    }
    return Note;
}());
exports.Note = Note;
var NotesComponent = (function () {
    function NotesComponent(notesService, categoriesService, fb) {
        this.notesService = notesService;
        this.categoriesService = categoriesService;
        this.fb = fb;
        this.title = 'List of notes';
        this.noteTitle = new forms_1.FormControl("", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)]));
        this.noteContent = new forms_1.FormControl("", forms_1.Validators.required);
        this.noteCategory = new forms_1.FormControl(new categories_component_1.Category(0, ''), forms_1.Validators.required);
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.loadNotes();
        this.clearModal();
        this.createForm();
    };
    NotesComponent.prototype.loadNotes = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (data) { _this.notes = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.notes); });
    };
    NotesComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) { _this.categories = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.categories); });
    };
    NotesComponent.prototype.newNote = function (note) {
        this.notesService.newNote(note).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    NotesComponent.prototype.editNote = function (note) {
        this.notesService.editNote(note).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    NotesComponent.prototype.deleteNote = function (id) {
        this.notesService.deleteNote(id).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    NotesComponent.prototype.saveNote = function () {
        if (this.modNote.id == 0) {
            this.newNote(this.modNote);
        }
        else {
            this.editNote(this.modNote);
        }
        this.loadNotes();
        this.loadCategories;
        this.dismissFormNote();
    };
    NotesComponent.prototype.delNote = function () {
        this.deleteNote(this.modNote.id);
        this.loadNotes();
        this.loadCategories();
        this.dismissDeleteNote();
    };
    NotesComponent.prototype.clearModal = function () {
        this.modNote = new Note(0, "", "", new categories_component_1.Category(0, ''));
    };
    NotesComponent.prototype.openEmptyFormNote = function () {
        this.clearModal();
        this.modalFormNote.open();
    };
    NotesComponent.prototype.openFormNote = function (note) {
        this.clearModal();
        this.modNote = note;
        this.noteForm.setValue({
            title: this.modNote.title,
            content: this.modNote.content,
            category: this.modNote.category
        });
        this.modalFormNote.open();
    };
    NotesComponent.prototype.dismissFormNote = function () {
        this.clearModal();
        this.modalFormNote.dismiss();
    };
    NotesComponent.prototype.createForm = function () {
        this.noteForm = this.fb.group({
            title: this.noteTitle,
            content: this.noteContent,
            category: this.noteCategory
        });
    };
    NotesComponent.prototype.openDeleteNote = function (note) {
        this.clearModal();
        this.modNote = note;
        this.modalDeleteNote.open();
    };
    NotesComponent.prototype.dismissDeleteNote = function () {
        this.clearModal();
        this.modalDeleteNote.dismiss();
    };
    NotesComponent.prototype.onChangeCat = function (cat) {
        this.modNote.category = cat;
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
            templateUrl: './app/notes/notes.component.html',
            providers: [notes_service_1.NotesService, categories_service_1.CategoriesService]
        }), 
        __metadata('design:paramtypes', [notes_service_1.NotesService, categories_service_1.CategoriesService, forms_1.FormBuilder])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map