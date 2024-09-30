import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../Model/products.model';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
 cataUrl="https://dummyjson.com/products/category/"
  constructor(private http:HttpClient) { }

  
getCatagoryProd(catagory:string):Observable<ProductResponse[]>{
 return this.http.get<ProductResponse[]>(`${this.cataUrl}${catagory}`)
}



}
