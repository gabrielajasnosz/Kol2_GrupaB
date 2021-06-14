import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GjDataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return this.http.get(this.url + '/api/forum/posts')
  }

  getOnePost(id: string | null) {
    return this.http.get(this.url + '/api/forum/posts/' + id)
  }
}
