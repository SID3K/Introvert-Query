import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { questionInterface, QuestionsService } from '../../services/questions.service';
import { SharedMaterialModule } from '../../sharedMaterial.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../snackbar.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [SharedMaterialModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{
  id=''
  question:any;
  answering = false;
  role:string='';

  private _snackBar = inject(MatSnackBar);

  constructor(private route:ActivatedRoute, private questionService:QuestionsService, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = params['id'];
        this.role = params['role'];
        this.questionService.getQuestionById(this.id).subscribe(
          (response)=>{
            this.question = response;
            console.log("succesfully fetched question by Id");
          },
          (error)=>{
            console.log(error, ": error while getting question by Id");
          }
        )
      }
    )
  }

  onAnswerSubmit(answer:string){
    
    if(answer.length === 0){
      // this.alert = true;
      this.openSnackBar();
    }
    else{
      this.answering = !this.answering;
      this.questionService.answerQuestionById(this.id, answer);
    }
  }

  navigateBack(){
    if(this.role=='q-stud'){
      this.router.navigate(['/student']);
    }
    if(this.role=='q-prof'){
      this.router.navigate(['/professor']);
    }
  }


  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: "Please answer something"
    });
  }

}
