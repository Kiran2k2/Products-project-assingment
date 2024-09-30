import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductResponse } from '../Model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  allProdUrl="https://dummyjson.com/products"
  constructor(private httpClient:HttpClient) {}
  getAllProduct(){
    return this.httpClient.get<ProductResponse>(this.allProdUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
