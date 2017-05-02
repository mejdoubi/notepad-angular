import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Note } from './notes.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService {
	constructor(private http: Http) {}
	private apiUrl = 'http://localhost:8080/symfony/notepad/web/app_dev.php/api/';
	private notesUrl = this.apiUrl + 'notes';

	getNotes() {
		return this.http.get(this.notesUrl)
			.map((res:Response) => res.json());
	}

	newNote(note: Note) {
		let newNote = {
			title: note.title,
			content: note.content,
			categoryId: note.category.id
		}
		console.log(newNote);
		return this.http.post(this.notesUrl, 
			JSON.stringify(newNote), {})
			.map((res:Response) => res.json());
	}

	editNote(note: Note) {
		let editedNote = {
			id: note.id,
			title: note.title,
			content: note.content,
			categoryId: note.category.id
		}
		console.log(editedNote);
	    return this.http.put(this.notesUrl, 
	    	JSON.stringify(editedNote), {})
	    	.map((res:Response) => res.json());
	}

	deleteNote(id: number) {
		return this.http.delete(this.notesUrl + "/" + id.toString(),
			{})
			.map((res:Response) => res.json());
	}

}