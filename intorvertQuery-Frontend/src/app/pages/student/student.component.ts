import { Component, inject, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../../sharedMaterial.module';
import { questionInterface, QuestionsService } from '../../services/questions.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../snackbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [SharedMaterialModule, SnackBarComponent, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  question = "";
  ques:any= []
  alert = true;
  
  
  private _snackBar = inject(MatSnackBar);
  
  constructor(private questionsService:QuestionsService){}

  ngOnInit(): void {
     this.questionsService.getAllQuestions().subscribe(
        (response:any)=>{
          this.ques = response;
          console.log('fetched data');
        }
      );
  }


  async onSubmit(event:any){
    event.preventDefault();
    //console.log(this.questionsService.getAnsweredQuestions())
    if(this.question.length === 0){
      this.alert = true;
      this.openSnackBar();
    }
    else{
      await this.questionsService.addQuestion(this.question);
      this.questionsService.getAllQuestions().subscribe(
        (response:any)=>{
          this.ques = response;
        }
      );
      console.log(this.ques);
      this.question = ""
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: "Please enter a question!!"
    });
  }

}
