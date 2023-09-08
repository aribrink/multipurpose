import { Observable } from "rxjs/internal/Observable";
import { DataItem } from "../models/data-item.model";

export interface IWebApiService {


    /**
    * Returns backend data.          
    */
    loadData(endpoint: string): Observable<DataItem[]>;

}