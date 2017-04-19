import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

export class Category {
	id: number;
	label: string;
    constructor(label: string) {
    	this.label = label;
    }
}

export const CATEGORIES: Category[] = [
    { id: 1, label: "cat1"},
    { id: 2, label: "cat2"},
];

@Component({
    selector: 'notepad-app',
    templateUrl: 'views/categories.component.html',
})

export class CategoriesComponent  { 
    title = 'List of categories';
    categories = CATEGORIES;
    modCategory: Category;

    constructor(){
        this.clearModal();
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