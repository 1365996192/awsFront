import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoginService {

  constructor(private http: HttpClient) {
    
   }
   sendAuthCode(email:string){

    const params = new HttpParams().set('email', email);
    return this.http.get("https://pz3unai3uq.us-east-1.awsapprunner.com/sendAuthCode",{ params })
  }
  loginWithEmailAndCode(email: string, authCode: string): Observable<any> {
    // 发送登录请求，使用邮箱和验证码
    return this.http.post('https://pz3unai3uq.us-east-1.awsapprunner.com/login', { email, authCode});
  }
}
