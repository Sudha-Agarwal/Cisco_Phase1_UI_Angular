import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  checkLogin(user:any):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.url}/login`,user);
  }

  showData(){
    alert("service method called");
  }

  getObservableData():Observable<number>{
    const numberObservable = new Observable<number>(
      observer => {
        let count = 1;
        const interval = setInterval(()=>{
          observer.next(count);
          if(count == 5){
            observer.complete();
            clearInterval(interval)
          }
          count++;
        },1000)
      }
    );
    return numberObservable;
  }

  getdataFromPromise(){
    var promise = new Promise(res => {
      res("promise1");
      res("promise2");
      res("promise3");
    })

    promise.then(console.log);
  }


  
  
}
