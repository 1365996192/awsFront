import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const params = new HttpParams()
      .set('email', email)
      .set('authCode', authCode);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const requestOptions = {
        headers,
        params
      };
      const body = {
        // 如果需要在请求体中添加其他字段，请在此处添加
      };
    return this.http.post('https://pz3unai3uq.us-east-1.awsapprunner.com/login', body, requestOptions);
  }

  appRegistration(data:any){
    return this.http.post('https://pz3unai3uq.us-east-1.awsapprunner.com/register', data);
  }

  voterRegistration(data:any){
    return this.http.post('https://pz3unai3uq.us-east-1.awsapprunner.com/checkin', data);
  }
}
