import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Note } from './notes.component';
import { Category, CATEGORIES} from '../categories/categories.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  	selector: 'notes-form',
  	templateUrl: './app/notes/notes-form.component.html'
})

export class NotesFormComponent {
	noteForm: FormGroup;
	@Input() modNote: Note;
	@Input() modNoteDate: Date;
    @Output() closeModalNote: EventEmitter<any> = new EventEmitter();
	categories = CATEGORIES;

	title = new FormControl("", Validators.required, Validators.minLength(4));
	content = new FormControl("", Validators.required);
	date = new FormControl("", Validators.required);
	category = new FormControl("", Validators.required);

  	constructor(private fb: FormBuilder) {
    	this.createForm();
  	}
    
    modDate(modDate: Date){
        return modDate.toISOString().substring(0, 10);
    }

  	setFormValues(){
  		this.noteForm.setValue({
    		title: this.modNote.title,
    		content: this.modNote.content,
    		date: this.modNoteDate,
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
}