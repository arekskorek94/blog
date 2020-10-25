import { SkillService } from './programming/skill.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProgrammingComponent } from './programming/programming.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { RouterModule } from '@angular/router';
import { SkillListComponent } from './programming/skill-list/skill-list.component';
import { SkillDetailComponent } from './programming/skill-detail/skill-detail.component';


@NgModule({
  declarations:
  [
    HomeComponent,
    ProgrammingComponent,
    HomeContentComponent,
    SkillListComponent,
    SkillDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'content', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'programming', component: ProgrammingComponent }

    ])
  ],
  providers:
  [
    SkillService
  ]
})
export class HomeModule { }
