import { Component, OnInit, ViewChild, Injectable} from '@angular/core';
import { NotesFormComponent } from './notes-form.component';
import { Category, CATEGORIES} from '../categories/categories.component';
import { NotesService } from './notes-service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

export class Note {
	id: number;
    title: string;
    content: string;
    date: number;
    category: Category;
    constructor(id: number, title: string, content: string,
    	date: number, category: Category) {
        this.id = id;
    	this.title = title;
    	this.content = content;
    	this.date = date;
    	this.category = category;
    }
}


@Component({
    selector: 'notepad-app',
    templateUrl: './app/notes/notes.component.html',
    providers: [ NotesService ]
})

export class NotesComponent  {
    title = 'List of notes';
    //notes = NOTES;
    categories = CATEGORIES;
    public notes: Note[];
    modNote: Note = new Note(0, "", "", Date.now(), new Category(""));

    @ViewChild(NotesFormComponent)
    private notesFormComponent: NotesFormComponent;

    @ViewChild('formNote')
    modalFormNote: ModalComponent;
    
    @ViewChild('deleteNote')
    modalDeleteNote: ModalComponent;

    constructor(private notesService: NotesService){
        this.clearModal();
    }
    
    ngOnInit() { 
        this.loadNotes();
    }

    loadNotes() {
        this.notesService.getNotes().subscribe(
            data => { this.notes = data },
            err => console.log(err),
            () => console.log(this.notes)
        );
    }

    clearModal() {
        this.modNote = new Note(0, "", "", Date.now(), new Category(""));
    }

    openEmptyFormNote(){
        this.clearModal();
        this.modalFormNote.open();
    }
    
    openFormNote(note: Note) {
        this.clearModal();
        this.modNote = note;
        //this.notesFormComponent.setFormValues();
        this.modalFormNote.open();
    }

    dismissFormNote() {
        this.clearModal();
        this.modalFormNote.dismiss();
    }
    
    openDeleteNote() {
        this.clearModal();
        this.modalDeleteNote.open();
    }

    dismissDeleteNote() {
        this.clearModal();
        this.modalDeleteNote.dismiss();
    }
}