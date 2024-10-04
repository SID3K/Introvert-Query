import { Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { ProfessorComponent } from './pages/professor/professor.component';
import { HodComponent } from './pages/hod/hod.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './pages/question/question.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'student',
        component:StudentComponent
    },
    {
        path:'professor',
        component: ProfessorComponent
    },
    {
        path: 'hod',
        component: HodComponent
    },
    {
        path: 'question/:role/:id',
        component: QuestionComponent
    }
];
