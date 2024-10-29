import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BedrockTextProcessingServiceService {

  private apiUrl = 'https://3reu9ybpyd.execute-api.us-east-1.amazonaws.com/prod/bedrock-text-processing-resource'
  constructor(private http: HttpClient) { }

  getTextResult(prompt: string): Observable<string> {
    return this.http.get<string>(this.apiUrl+'?prompt='+prompt)
  }

}
