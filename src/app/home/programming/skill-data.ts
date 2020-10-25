import { ISkill } from './skill';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'

export class SkillData implements InMemoryDbService{

  createDb() {
    const skills: ISkill[] = [
      {
        'id': 1,
        'skillName': 'C#',
        'knowledgeDate': 'Grudzień 2018',
        'description': 'C# używam od 2018 roku, jest to podstawowy język programowania w moim zespole.',
        'level': 3.8
      },
      {
        'id': 2,
        'skillName': 'EF',
        'knowledgeDate': 'Styczeń 2020',
        'description': 'Podczas pierwszego projektu w RazorPages rozpocząłem swoją przygodę z Entity Frameworkiem. ',
        'level': 3
      },
      {
        'id': 3,
        'skillName': 'Angular',
        'knowledgeDate': 'Październik, 2020',
        'description': 'W frontendowych frameworkach dopiero zaczynam komercyjnie swoją przygodę. Rozwój w Angularzę rozpocząłem na II roku studiów.',
        'level': 2
      },
      {
        'id': 4,
        'skillName': '.net Core 3',
        'knowledgeDate': 'Styczeń 2020',
        'description': 'Coś tam potrafie.',
        'level': 3.1
      },
      {
        'id': 6,
        'skillName': 'MVP',
        'knowledgeDate': 'Grudzień 2018',
        'description': 'Używam przy programowaniu w Winformsowej aplikacji.',
        'level': 3.5
      },
      {
        'id': 7,
        'skillName': 'WinForm',
        'knowledgeDate': 'Grudzień 2018',
        'description': 'Pierwsza aplikacja podczas komercyjnych projektów.',
        'level': 3.5
      }
    ];
    return { skills };
  }

}
