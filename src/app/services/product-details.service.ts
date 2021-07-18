import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  
  constructor(private http: HttpClient) {
  }
  
  getProductId(id:any): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/rest/products/' + id);
  }
  
}