import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//import {Observable} from 'rxjs';
import { Observable, of, throwError } from 'rxjs'
import {API_URL} from '../env';
import {Exam} from '../model/exam';
import { catchError,retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExamsApiService {

  constructor(private http: HttpClient) { }
  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${API_URL}/exams`)
    .pipe(  retry(1), catchError(error => {
        return throwError(error.message);
      }));
    }
}
