import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get(environment.api_endpoint + 'api/Package');
  }

  findOrdersByPackageId(PackageId: string): Observable<any> {
    return this.http.get(environment.api_endpoint + `api/find/Package/${PackageId}`);
  }

  GetOrderById(orderId: number): Observable<any> {
    return this.http.get(environment.api_endpoint + `api/Package/${orderId}`);
  }

}
