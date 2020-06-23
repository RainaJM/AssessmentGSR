import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from "../shared/Services/http.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private taskBehave = new BehaviorSubject<Object>({
    userDetail: "",
  });
  constructor(private httpService: HttpService) {}

  setTaskView(taskBehave: Object) {
    this.taskBehave.next(taskBehave);
  }
  getTaskView(): Observable<any> {
    return this.taskBehave.asObservable();
  }
  /**
   * @method
   * @description
   * The getData  service is used to invoke http call to fetch data
   */
  getData(url: any): Observable<any> {
    return this.httpService.get(url).pipe(map((response) => response));
  }
}
