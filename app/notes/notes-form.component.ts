import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { Note } from './notes.component';
import { Category } from '../categories/categories.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  	selector: 'notes-form',
  	templateUrl: './app/notes/notes-form.component.html'
})

export class NotesFormComponent implements OnChanges{
	noteForm: FormGroup;
	@Input() modNote: Note;
    @Output() closeModalNote: EventEmitter<any> = new EventEmitter();
    @Output() saveFormNote: EventEmitter<any> = new EventEmitter();
    categories = CATEGORIES;

	title = new FormControl("", Validators.required, Validators.minLength(4));
	content = new FormControl("", Validators.required);
	date = new FormControl(new Date('today'), Validators.required);
	category = new FormControl(new Category(''), Validators.required);

  	constructor(private fb: FormBuilder) {
    	this.createForm();
  	}

  	ngOnChanges() {
  		this.noteForm.setValue({
    		title: this.modNote.title,
    		content: this.modNote.content,
    		date: this.modNote.date,
    		category: this.modNote.category
    	})
  	}

  	createForm() {
    	this.noteForm = this.fb.group({
        	title: this.title,
      		content: this.content,
      		date: this.date,
      		category: this.category
    	});
  	}

    dismissFormNote() {
        this.closeModalNote.emit(null);
    }

    saveNote(note: Note) {
        this.saveFormNote.emit(note);
    }
}