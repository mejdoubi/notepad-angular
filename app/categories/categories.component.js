"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var categories_service_1 = require('./categories-service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var Category = (function () {
    function Category(id, label) {
        this.id = id;
        this.label = label;
    }
    return Category;
}());
exports.Category = Category;
var CategoriesComponent = (function () {
    function CategoriesComponent(categoriesService, fb) {
        this.categoriesService = categoriesService;
        this.fb = fb;
        this.title = 'List of categories';
        this.catLabel = new forms_1.FormControl("", forms_1.Validators.required);
        this.clearModal();
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.loadCategories();
        this.clearModal();
        this.createForm();
    };
    CategoriesComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) { _this.categories = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.categories); });
    };
    CategoriesComponent.prototype.newCategory = function (cat) {
        this.categoriesService.newCategory(cat).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    CategoriesComponent.prototype.editCategory = function (cat) {
        this.categoriesService.editCategory(cat).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    CategoriesComponent.prototype.deleteCategory = function (id) {
        this.categoriesService.deleteCategory(id).subscribe(function (data) { console.log(data); }, function (err) { return console.log(err); });
    };
    CategoriesComponent.prototype.saveCategory = function () {
        if (this.modCategory.id == 0) {
            this.newCategory(this.modCategory);
        }
        else {
            this.editCategory(this.modCategory);
        }
        this.loadCategories;
        this.dismissFormCategory();
    };
    CategoriesComponent.prototype.delCategory = function () {
        this.deleteCategory(this.modCategory.id);
        this.loadCategories();
        this.dismissDeleteCategory();
    };
    CategoriesComponent.prototype.clearModal = function () {
        this.modCategory = new Category(0, "");
    };
    CategoriesComponent.prototype.openEmptyFormCategory = function () {
        this.clearModal();
        this.modalFormCategory.open();
    };
    CategoriesComponent.prototype.openFormCategory = function (category) {
        this.clearModal();
        this.modCategory = category;
        this.catForm.setValue({
            label: this.modCategory.label
        });
        this.modalFormCategory.open();
    };
    CategoriesComponent.prototype.createForm = function () {
        this.catForm = this.fb.group({
            label: this.catLabel,
        });
    };
    CategoriesComponent.prototype.dismissFormCategory = function () {
        this.clearModal();
        this.modalFormCategory.dismiss();
    };
    CategoriesComponent.prototype.openDeleteCategory = function (cat) {
        this.clearModal();
        this.modCategory = cat;
        this.modalDeleteCategory.open();
    };
    CategoriesComponent.prototype.dismissDeleteCategory = function () {
        this.modalDeleteCategory.dismiss();
    };
    __decorate([
        core_1.ViewChild('formCategory'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], CategoriesComponent.prototype, "modalFormCategory", void 0);
    __decorate([
        core_1.ViewChild('deleteCategory'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], CategoriesComponent.prototype, "modalDeleteCategory", void 0);
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'notepad-app',
            templateUrl: './app/categories/categories.component.html',
            providers: [categories_service_1.CategoriesService]
        }), 
        __metadata('design:paramtypes', [categories_service_1.CategoriesService, forms_1.FormBuilder])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map