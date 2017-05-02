import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { CategoriesService } from './categories-service';

export class Category {
	id: number;
	label: string;
    constructor(id: number, label: string) {
        this.id = id;
    	this.label = label;
    }
}

@Component({
    selector: 'notepad-app',
    templateUrl: './app/categories/categories.component.html',
    providers: [ CategoriesService ]
})

export class CategoriesComponent  { 
    title = 'List of categories';
    modCategory: Category;
    public categories: Category[];

    constructor(private categoriesService: CategoriesService){
        this.clearModal();
    }

    ngOnInit() { 
        this.loadCategories();
    }

    loadCategories() {
        this.categoriesService.getCategories().subscribe(
            data => { this.categories = data },
            err => console.log(err),
            () => console.log(this.categories)
        );
    }

    @ViewChild('formCategory')
    modalFormCategory: ModalComponent;
    
    @ViewChild('deleteCategory')
    modalDeleteCategory: ModalComponent;

    clearModal() {
        this.modCategory = new Category("");
    }

    openEmptyFormCategory(){
        this.clearModal();
        this.modalFormCategory.open();
    }
    
    openFormCategory(category: Category) {
        this.clearModal();
        this.modCategory = category;
        this.modalFormCategory.open();
    }

    dismissFormCategory() {
        this.clearModal();
        this.modalFormCategory.dismiss();
    }
    
    openDeleteCategory() {
        this.modalDeleteCategory.open();
    }

    dismissDeleteCategory() {
        this.modalDeleteCategory.dismiss();
    }

    saveFormCategory(bool: Boolean) {
        this.clearModal();
        if(bool){
            this.categories.push(this.modCategory);
        } else {
            this.categories[this.modCategory.id] = this.modCategory;
        }
        // API requests
    }

}