import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GenericService {
  constructor(private http: HttpClient) {}

  get(url: string, id: number) {
    return this.http.get(`${url}/${id}`);
  }

  post(url: string, obj: any) {
    return this.http.post<any>(url, obj);
  }

  update(url: string, obj: any) {
    return this.http.put<any>(url, obj);
  }
}
