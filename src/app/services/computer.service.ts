import { Injectable } from '@angular/core';
import {Computer} from '../models/computer';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  apiUrlComputers = 'http://localhost:3000/computers';
  marquesDisponibles = ['Dell', 'Hp', 'Apple', 'Asus'];
  typesDisponibles= ['Portable', 'Fixe', 'Tablette hybride'];
  categoriesDisponibles= ['Gaming', 'Bureautique', 'Premier prix'];

  constructor(private http: HttpClient) { }


  getAllComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.apiUrlComputers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }



  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }




}
