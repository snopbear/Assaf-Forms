import { Injectable } from "@angular/core";
import { Model } from "../model/model";
import { RootService } from "../core/_services/root/root.service";
@Injectable({
  providedIn: "root"
})
export class FormBuilderService {
  endPoints = {
    formBuilder: "FormBuilder"
  };

  constructor(private rootService: RootService) {}

  addModel(newModel?: Model) {
    return this.rootService.postRoot(this.endPoints.formBuilder, newModel);
  }
}
