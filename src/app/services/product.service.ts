import { ProductResponseModel } from './../models/productResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44361/api/products/getall"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    }
  }
  
