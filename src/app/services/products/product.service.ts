import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl = "http://fmapp.herokuapp.com/api/" //needs to be changed

  private _categoryUrl = "category"
  private _subCategoryUrl = "subcategory/"
  private _productsUrl = "products/"

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<any>(`${this._baseUrl + this._categoryUrl}`)
  }

  getSubCategory(catId):Observable<any>{
    return this.http.get<any>(`${this._baseUrl+this._subCategoryUrl+catId}`)
  }

  getProducts(subId):Observable<any>{
    return this.http.get<any>(`${this._baseUrl+this._productsUrl+subId}`)
  }
}
