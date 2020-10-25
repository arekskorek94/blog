import { ISkill } from './skill';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'

export class SkillData implements InMemoryDbService{

  createDb() {
    const skills: ISkill[] = [
      {
        'id': 1,
        'skillName': 'C#',
        'knowledgeDate': 'March 19, 2019',
        'description': 'c# oraz .net frameworka używam codziennie w pracy',
        'level': 4
      },
      {
        'id': 2,
        'skillName': 'EF',
        'knowledgeDate': 'March 22, 2018',
        'description': 'Jakoś tam jest,Jakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jestJakoś tam jest',
        'level': 3.2
      },
      {
        'id': 3,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      },
      {
        'id': 4,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      },
      {
        'id': 5,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      },
      {
        'id': 6,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      },
      {
        'id': 7,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      },
      {
        'id': 8,
        'skillName': 'Angular',
        'knowledgeDate': 'March 19, 2020',
        'description': 'Coś tam potrafie.',
        'level': 5
      }
    ];
    return { skills };
  }

}
