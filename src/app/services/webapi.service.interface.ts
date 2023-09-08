import { Observable } from "rxjs/internal/Observable";
import { Product } from "../models/product.model";
import { Customer } from "../models/customer.model";

export interface IWebApiService {


    /**
    * Returns backend data.          
    */
    loadData(endpoint: string): Observable<any>;

    /**
    * Returns an items list.          
    */
    getListItems(): Observable<any>;

    /**
    * Returns item details.
    * @constructor
    * @param {string} itemId - The id of the item.
    */
    getItemDetails(itemId: number): Observable<Customer>;

}