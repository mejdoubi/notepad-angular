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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var NotesService = (function () {
    function NotesService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/symfony/notepad/web/app_dev.php/api/';
        this.notesUrl = this.apiUrl + 'notes';
    }
    NotesService.prototype.getNotes = function () {
        return this.http.get(this.notesUrl)
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.newNote = function (note) {
        var newNote = {
            title: note.title,
            content: note.content,
            categoryId: note.category.id
        };
        console.log(newNote);
        return this.http.post(this.notesUrl, JSON.stringify(newNote), {})
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.editNote = function (note) {
        var editedNote = {
            id: note.id,
            title: note.title,
            content: note.content,
            categoryId: note.category.id
        };
        console.log(editedNote);
        return this.http.put(this.notesUrl, JSON.stringify(editedNote), {})
            .map(function (res) { return res.json(); });
    };
    NotesService.prototype.deleteNote = function (id) {
        return this.http.delete(this.notesUrl + "/" + id.toString(), {})
            .map(function (res) { return res.json(); });
    };
    NotesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotesService);
    return NotesService;
}());
exports.NotesService = NotesService;
//# sourceMappingURL=notes-service.js.map