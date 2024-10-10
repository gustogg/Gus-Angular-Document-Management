import { Injectable } from '@angular/core';
import { IPic } from '../interfaces/i-pic';
import { Observable } from 'rxjs';
import { IPagination } from '../interfaces/i-pagination';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PicService {
  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService,
    private authService: AuthenticationService
  ) { }

  get baseHttp() {
    return this.baseHttpService;
  }
  // OPEN GET PICTURES
  getPics(): Observable<IPagination<IPic>> {
    const headers = {
      Authorization: this.authService.token,
    };
    return this.http.get<IPagination<IPic>>('/api/pictures/', { headers });
  }
  // CLOSE GET PICTURES
  //OPEN GET PICTURES BY ID
    getPic(id:number): Observable<IPic> {
      const headers = {
        Authorization: this.authService.token,
      };
      return this.http.get<IPic>(`/api/pictures/${id}/`, { headers });
    }
  //CLOSE GET PICTURES BY ID
  //OPEN UPDATE PICTURES BY ID
    updatePic(id: number, file: any): Observable<IPic> {
      const headers = {
        Authorization: this.authService.token,
      };

      const formData: FormData = new FormData();
      formData.append('src', file);
      return this.http.put<IPic>(`/api/pictures/${id}/`, formData, {
        headers,
      });
    }
  //CLOSE UPDATE PICTURES BY ID
  //OPEN REMOVE PICTURES BY ID
    removePic(id: number): Observable<null> {
      const headers = {
        Authorization: this.authService.token,
      };
      return this.http.delete<null>(`/api/pictures/${id}/`, {
        headers,
      });
    }
  //CLOSE REMOVE PICTURES BY ID
  //OPEN UPLOAD PICTURES
    uploadPic(file: any): Observable<IPic> {
      const headers = {
        Authorization: this.authService.token,
      };
      const formData: FormData = new FormData();
      formData.append('src', file);
      return this.http.post<IPic>(`/api/pictures/`, formData, {
        headers,
      });
    }
  //CLOSE UPLOAD PICTURES
}
