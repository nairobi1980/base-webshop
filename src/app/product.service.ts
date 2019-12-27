import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';
  private log(message: string) {
    this.messageService.add(`ProductService: ${message}`);
  }

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

      getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
      }

      getProduct(id: string): Observable<any> {
        return this.http.get<Product[]>(this.productsUrl + '/' + id);
      }
}
