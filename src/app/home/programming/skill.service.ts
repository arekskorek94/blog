import { BehaviorSubject, Observable, of,throwError  } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkill } from './skill';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills: ISkill[];
  private url = 'api/skills';

  private changeSelectedSkillSubject = new BehaviorSubject<ISkill | null>(null);
  changeSelectedSkillAction$ = this.changeSelectedSkillSubject.asObservable();

  changeSelectedSkill(selectedSkill: ISkill | null): void {
    this.changeSelectedSkillSubject.next(selectedSkill);
  }

  constructor(private http: HttpClient) { }

  getSkill(): Observable<ISkill[]> {
    if (this.skills) {
      return of(this.skills);
    }
    return this.http.get<ISkill[]>(this.url).pipe(
      tap((data) => (this.skills = data)),
      catchError(this.handleError)
    );
  }



  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error (err);
    return throwError (errorMessage);
  }
}
