import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Category } from './categories.component';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesService {
	constructor(private http: Http) {}
	private apiUrl = 'http://localhost:8080/symfony/notepad/web/app_dev.php/api/';
	private categoriesUrl = this.apiUrl + 'categories';

	getCategories() {
		return this.http.get(this.categoriesUrl)
			.map((res:Response) => res.json());
	}

	newCategory(cat: Category) {
		let newCategory = {
			label: cat.label
		}
		console.log(newCategory);
		return this.http.post(this.categoriesUrl, 
			JSON.stringify(newCategory), {})
			.map((res:Response) => res.json());
	}

	editCategory(cat: Category) {
		let editedCategory = {
			id: cat.id,
			label: cat.label
		}
		console.log(editedCategory);
	    return this.http.put(this.categoriesUrl, 
	    	JSON.stringify(editedCategory), {})
	    	.map((res:Response) => res.json());
	}

	deleteCategory(id: number) {
		console.log(this.categoriesUrl + "/" + id.toString());
		return this.http.delete(this.categoriesUrl + "/" + id.toString(),
			{})
			.map((res:Response) => res.json());
	}
}