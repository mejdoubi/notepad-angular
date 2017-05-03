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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/symfony/notepad/web/app_dev.php/api/';
        this.categoriesUrl = this.apiUrl + 'categories';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl)
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.newCategory = function (cat) {
        var newCategory = {
            label: cat.label
        };
        console.log(newCategory);
        return this.http.post(this.categoriesUrl, JSON.stringify(newCategory), {})
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.editCategory = function (cat) {
        var editedCategory = {
            id: cat.id,
            label: cat.label
        };
        console.log(editedCategory);
        return this.http.put(this.categoriesUrl, JSON.stringify(editedCategory), {})
            .map(function (res) { return res.json(); });
    };
    CategoriesService.prototype.deleteCategory = function (id) {
        console.log(this.categoriesUrl + "/" + id.toString());
        return this.http.delete(this.categoriesUrl + "/" + id.toString(), {})
            .map(function (res) { return res.json(); });
    };
    CategoriesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoriesService);
    return CategoriesService;
}());
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories-service.js.map