import { Component, OnChanges, Input } from '@angular/core';
import { Note } from './notes.component';
import { Category, CATEGORIES} from './categories.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  	selector: 'notes-form',
  	templateUrl: 'views/notes-form.component.html'
})

export class NotesFormComponent implements OnChanges{
	noteForm: FormGroup;
	@Input() modNote: Note;
	@Input() modNoteDate: Date;
	categories = CATEGORIES;

	title = new FormControl("", Validators.required, Validators.minLength(4));
	content = new FormControl("", Validators.required);
	date = new FormControl("", Validators.required);
	category = new FormControl("", Validators.required);

  	constructor(private fb: FormBuilder) {
    	this.createForm();
  	}

  	modDate(){
        return this.modNoteDate.toISOString().substring(0, 10);
    }
    
  	ngOnChanges(){
  		this.noteForm.setValue({
    		title: this.modNote.title,
    		content: this.modNote.content,
    		date: this.modDate(),
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
}