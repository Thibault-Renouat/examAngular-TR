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

  getOneById(id: number): Observable<Computer>{
    return this.http.get<Computer>(this.apiUrlComputers +'/'+ id).pipe(retry(1), catchError(this.handleError));
  }

  addComputer(computer:Computer): Observable<Computer> {
    return this.http.post<Computer>(this.apiUrlComputers, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  editComputer(computer: Computer):Observable<Computer>{
    return this.http.put<Computer>(this.apiUrlComputers +'/'+ computer.id, computer ).pipe(
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
