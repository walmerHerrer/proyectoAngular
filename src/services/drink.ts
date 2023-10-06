import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {}

  listdrinksAll(): Observable<any>{
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  }
  //www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
  getIDdrinks(id: any): Observable<any>{
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id;
    return this.http.get(url);
  }
}
