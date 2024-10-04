import { Component, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../../sharedMaterial.module';
import { questionInterface, QuestionsService } from '../../services/questions.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [SharedMaterialModule,RouterModule, HttpClientModule],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.css'
})
export class ProfessorComponent implements OnInit{
  
  quesCategory:any=[]


  constructor(private questionsService:QuestionsService){
    this.quesCategory = [
      {
        label: "All",
        content: {
          title: "All questions list",
          quesList:[]
        }
      },
      {
        label: "Answered",
        content:  {
          title: "Answered questions list",
          quesList: []
        }
      },
      {
        label: "Not answered",
        content: {
          title: "Unanswered questions list",
          quesList: []
        }
      }
    ]
}


  ngOnInit(): void {
      this.questionsService.getAllQuestions().subscribe(
        (response:any)=>{
          // console.log('ques 0');
          this.quesCategory[0].content.quesList = response;
        }
      );

      this.questionsService.getAnsweredQuestions().subscribe(
        (response:any)=>{
          // console.log('ques 1');
          this.quesCategory[1].content.quesList = response;
        }
      );

      this.questionsService.getUnansweredQuestions().subscribe(
        (response:any)=>{
          // console.log('ques 2');
          this.quesCategory[2].content.quesList = response;
        }
      );
  }

}
