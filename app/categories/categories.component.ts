import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CategoriesService } from './categories-service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

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
    templateUrl: './categories.component.html',
    providers: [ CategoriesService ]
})

export class CategoriesComponent  { 
    title = 'List of categories';
    public categories: Category[];

    modCategory: Category;

    catForm: FormGroup;
    catLabel = new FormControl("", Validators.required);

    constructor(private titleService: Title, 
        private categoriesService: CategoriesService,
        private fb: FormBuilder){
        this.clearModal();
        titleService.setTitle(this.title);
    }

    ngOnInit() { 
        this.loadCategories();
        this.clearModal();
        this.createForm();
    }

    loadCategories() {
        this.categoriesService.getCategories().subscribe(
            data => { this.categories = data },
            err => console.log(err),
            () => console.log(this.categories)
        );
    }

    newCategory(cat: Category) {
        this.categoriesService.newCategory(cat).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    editCategory(cat: Category) {
        this.categoriesService.editCategory(cat).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    deleteCategory(id: number) {
        this.categoriesService.deleteCategory(id).subscribe(
            data => { console.log(data) },
            err => console.log(err)
        );
    }

    saveCategory(){
        if(this.modCategory.id == 0){
            this.newCategory(this.modCategory);
        } else {
            this.editCategory(this.modCategory);
        }
        this.dismissFormCategory();
    }

    delCategory(){
        this.deleteCategory(this.modCategory.id);
        this.dismissDeleteCategory();
    }

    @ViewChild('formCategory')
    modalFormCategory: ModalComponent;
    
    @ViewChild('deleteCategory')
    modalDeleteCategory: ModalComponent;

    clearModal() {
        this.modCategory = new Category(0, "");
    }

    openEmptyFormCategory(){
        this.clearModal();
        this.modalFormCategory.open();
    }
    
    openFormCategory(category: Category) {
        this.clearModal();
        this.modCategory = category;
        this.catForm.setValue({
            label: this.modCategory.label
        })
        this.modalFormCategory.open();
    }

    createForm() {
        this.catForm = this.fb.group({
            label: this.catLabel,
        });
    }

    dismissFormCategory() {
        this.clearModal();
        this.modalFormCategory.dismiss();
    }
    
    openDeleteCategory(cat: Category) {
        this.clearModal();
        this.modCategory = cat;
        this.modalDeleteCategory.open();
    }

    dismissDeleteCategory() {
        this.modalDeleteCategory.dismiss();
    }
}