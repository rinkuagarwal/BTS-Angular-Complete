import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';
const URL='http://localhost:8081/bug/'
@Injectable({
  providedIn: 'root'
})
export class BugService {
  constructor(private http: HttpClient) { }
  saveBug(bug: Bug) {
    return this.http.post(URL,bug, {
      headers: { "content-type": 'application/json' }
    });
  }
  getBugs(){
    return this.http.get(URL);
  }

  getBug(name:any){
    return this.http.get(URL+'name/'+ name, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }
  getBugbyStatus(status:any){
    return this.http.get(URL+'status/'+ status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }
  update(bug: Bug, id: string) {
    return this.http.put(URL+id, bug, {
      headers: { "content-type": 'application/json' }

    });
  }
}

