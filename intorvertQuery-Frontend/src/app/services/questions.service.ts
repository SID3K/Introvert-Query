import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { firstValueFrom } from 'rxjs';
import { filter, map } from 'rxjs/operators'

export interface questionInterface{
  id:string
  question: string,
  answered: boolean
  answer?: string
}

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {


  constructor(private http:HttpClient) { }
  id = 5;
  // questions:questionInterface[] = [
  //   {id:'1', question:"What is Angular? Why was it introduced?", answered: false},
  //   {id:'2', question: "What is TypeScript?", answered: true, answer:"Type Script is a scripting language"},
  //   {id:'3', question:"What is data binding? Which type of data binding does Angular deploy?", answered: false},
  //   {id:'4', question:"What is data binding? Which type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploych type of data binding does Angular deploy?", answered: false}
  // ]
  
  getAllQuestions(){
    return this.http.get(environment.apiUrl + environment.apiGetQuestionsUrl);
   }

  addQuestion(q:string): Promise<any> {
    return firstValueFrom(this.http.post(environment.apiUrl + environment.apiAddQuestionUrl,{
      question:q}));
  }

  getAnsweredQuestions(){
    return this.http.get(environment.apiUrl + environment.apiGetAnsweredQuestions);
  }

  getUnansweredQuestions(){
    return this.http.get(environment.apiUrl + environment.apiGetUnansweredQuestions)
  }

  getQuestionById(id:string){          //add id in the url
    return this.http.get(environment.apiUrl + environment.apiGetQuestionById + id);
  }

  answerQuestionById(id:any, answer2:string){   //add id in the url
    this.http.patch(environment.apiUrl + environment.apiUpdateQuestionById + id,answer2,{
      headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    }).subscribe({
      next(response){
        console.log("succefully updated");
        console.log(response);
      },
      error(error){
        console.log(error, " error occured while updating answer");
      }
    });
  }

}
