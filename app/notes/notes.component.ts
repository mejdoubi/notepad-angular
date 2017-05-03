import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Category } from '../categories/categories.component';

import { NotesService } from './notes-service';
import { CategoriesService } from '../categories/categories-service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

export class Note {
	id: number;
    title: string;
    content: string;
    category: Category;
    constructor(id: number, title: string, 
        content: string, category: Category) {
        this.id = id;
    	this.title = title;
    	this.content = content;
    	this.category = category;
    }
}

@Component({
    selector: 'notepad-app',
    templateUrl: './app/notes/notes.component.html',
    providers: [ NotesService, CategoriesService ]
})

export class NotesComponent  {
    title = 'List of notes';
    public notes: Array<Note>;
    public categories: Array<Category>;

    modNote: Note;

    noteForm: FormGroup;
    noteTitle = new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]));
    noteContent = new FormControl("", Validators.required);
    noteCategory = new FormControl(new Category(0, ''), Validators.required);

    @ViewChild('formNote')
    modalFormNote: ModalComponent;
    
    @ViewChild('deleteNote')
    modalDeleteNote: ModalComponent;

    constructor(private notesService: NotesService, 
        private categoriesService: CategoriesService, 
        private fb: FormBuilder){
    }
    
    ngOnInit() { 
        this.loadCategories();
        this.loadNotes();
        this.clearModal();
        this.createForm();
    }

    loadNotes() {
        this.notesService.getNotes().subscribe(
            data => { this.notes = data },
            err => console.log(err),
            () => console.log(this.notes)
        );
    }

    loadCategories() {
        this.categoriesService.getCategories().subscribe(
            data => { this.categories = data },
            err => console.log(err),
            () => console.log(this.categories)
        );
    }

    newNote(note: Note) {
        this.notesService.newNote(note).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    editNote(note: Note) {
        this.notesService.editNote(note).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    deleteNote(id: number) {
        this.notesService.deleteNote(id).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    saveNote(){
        if(this.modNote.id == 0){
            this.newNote(this.modNote);
        } else {
            this.editNote(this.modNote);
        }
        this.loadNotes();
        this.loadCategories;
        this.dismissFormNote();
    }

    delNote(){
        this.deleteNote(this.modNote.id);
        this.loadNotes();
        this.loadCategories();
        this.dismissDeleteNote();
    }

    clearModal() {
        this.modNote = new Note(0, "", "", new Category(0, ''));
    }

    openEmptyFormNote(){
        this.clearModal();
        this.modalFormNote.open();
    }
    
    openFormNote(note: Note) {
        this.clearModal();
        this.modNote = note;
        this.noteForm.setValue({
            title: this.modNote.title,
            content: this.modNote.content,
            category: this.modNote.category
        })
        this.modalFormNote.open();
        
    }

    dismissFormNote() {
        this.clearModal();
        this.modalFormNote.dismiss();
    }

    createForm() {
        this.noteForm = this.fb.group({
            title: this.noteTitle,
            content: this.noteContent,
            category: this.noteCategory
        });
    }
    
    openDeleteNote(note: Note) {
        this.clearModal();
        this.modNote = note;
        this.modalDeleteNote.open();
    }

    dismissDeleteNote() {
        this.clearModal();
        this.modalDeleteNote.dismiss();
    }

    onChangeCat(cat: Category) {
        this.modNote.category = cat;
    }
}