import { Injectable } from "@angular/core";
import { catchError, tap, map, filter, shareReplay } from "rxjs/operators";
import { throwError, BehaviorSubject, Observable } from "rxjs";
import { Model } from "../../model/model";
import { RootService } from "src/app/shared/core/_services/root/root.service";

@Injectable({
  providedIn: "root"
})
export class FormBuilderCrudDemoService {
  endPoints = {
    formBuilder: "FormBuilder"
  };
  
  constructor(private rootService: RootService) {}

  selectModelByIdObservableForPost(id: number) {
    return this.rootService.getRoot(`${this.endPoints.formBuilder}/${id}`);
  }
  selectModelByIdForPut(id: number) {
    return this.rootService.getRoot(`${this.endPoints.formBuilder}/${id}`);
  }



  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
