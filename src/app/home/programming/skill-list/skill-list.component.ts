import { SkillService } from './../skill.service';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '../skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  skills: ISkill[];
  selectedSkill: ISkill;
  errorMessage: string;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {

    this.skillService.changeSelectedSkillAction$.subscribe(
      selectedSkill => {
        this.selectedSkill = selectedSkill;
      }
    );
    this.skillService.getSkill().subscribe(
      (skill: ISkill[]) => {
        this.skills = skill;
        if (this.skills.length > 0){
          this.onSelected(this.skills[0]);
        }
      },
      (error: any) => this.errorMessage = (error as any)
    );
  }

  onSelected(skill: ISkill |null): void{
    if (skill) {
      this.skillService.changeSelectedSkill(skill);
    }
  }
}
