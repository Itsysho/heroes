import { Observable } from "redux";
import { AjaxResponse } from "rxjs/ajax";

export type Response<T> = Observable<AjaxResponse<T>>;
