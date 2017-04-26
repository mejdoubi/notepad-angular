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
}