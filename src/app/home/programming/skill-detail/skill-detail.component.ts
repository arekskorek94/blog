import { SkillService } from './../skill.service';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '../skill';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  cardHeader = 'Szczegóły';
  skill: ISkill | null;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.changeSelectedSkillAction$.subscribe(
      selectedSkill => {
        console.log('work in detail!');
        return this.skill = selectedSkill;
      }
    );
  }

}
