import { Component, ViewChild } from '@angular/core';
import { NotesFormComponent } from './notes-form.component';
import { Category, CATEGORIES} from './categories.component';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

export class Note {
	id: number;
    title: string;
    content: string;
    date: Date;
    category: Category;
    constructor(id: number, title: string, content: string,
    	date: Date, category: Category) {
        this.id = id;
    	this.title = title;
    	this.content = content;
    	this.date = date;
    	this.category = category;
    }
}

const NOTES: Note[] = [
	{ id: 1, title: "title1", content: "content1"
	, date: new Date("2017-03-21"), category: new Category("cat1") },

	{ id: 2, title: "title2", content: "content2"
    , date: new Date("2017-03-27"), category: new Category("cat2") },

    { id: 3, title: "title3", content: "content3"
    , date: new Date("2017-03-29"), category: new Category("cat2") },
];

@Component({
    selector: 'notepad-app',
    templateUrl: 'views/notes.component.html',
})

export class NotesComponent  {
    title = 'List of notes';
    notes = NOTES;
    categories = CATEGORIES;
    modNote: Note;
    modNoteDate: Date;

    //@ViewChild(NotesFormComponent)
    //private notesFormComponent: NotesFormComponent;

    @ViewChild('formNote')
    modalFormNote: ModalComponent;
    
    @ViewChild('deleteNote')
    modalDeleteNote: ModalComponent;

    constructor(){
        this.clearModal();
    }

    clearModal() {
        this.modNote = new Note(0, "", "", new Date(), new Category(""));
        this.modNoteDate = new Date();
    }

    openEmptyFormNote(){
        this.clearModal();
        this.modalFormNote.open();
    }
    
    openFormNote(note: Note) {
        this.clearModal();
        this.modNote = note;
        this.modNoteDate = note.date;
        this.modalFormNote.open();
        //this.notesFormComponent.setFormValues();
    }

    dismissFormNote() {
        this.clearModal();
        this.modalFormNote.dismiss();
    }
    
    openDeleteNote() {
        this.modalDeleteNote.open();
    }

    dismissDeleteNote() {
        this.modalDeleteNote.dismiss();
    }
}