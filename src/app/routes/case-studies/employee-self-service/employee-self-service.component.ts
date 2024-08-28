import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-employee-self-service',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent],
  templateUrl: './employee-self-service.component.html',
  styleUrl: './employee-self-service.component.css',
})
export class EmployeeSelfServiceComponent {
  arr = [
    'Revenue N$5 billion',
    'Privately held',
    '5,500 employees arming, retail, IT, property development, steel, hospitality & more',
    'Over 4% of Namibia GDP',
    'Vision 2019: N$2 billing EBIT | 4,000 additional employment opportunities | employer of choice | 20% reduction in carbon footprint',
  ];

  keyChallenges = [
    'Increase efficiencies by replacing a paper-based, labor-intensive vacation requests with an electronic process',
    'Enable users with limited SAP literacy or computer proficiency to interact with HR',
    'Minimize training requirements via simplified interfaces',
    'Accommodate multi-lingual needs, especially for local languages not supported by SAP',
    'Prevent inappropriate or fraudulent access to personal data',
    'Prevent downtime related to password resets',
    'Reduce time pressure on HR to provide simple ESS data',
  ];

  majorObjectives = [
    'educe turn-around for simple HR requests',
    'Accommodate workers with limited computer access or knowledge',
    'Prevent information privacy violations',
  ];

  keyBusinessOutcomes = [
    'Private HR data such as pay slips, vacation requests and scheduling are available to non-specialist users at shared kiosks on a timely basis',
    'The paper-based, labor-intensive vacation request system is replaced SAP data is replaced with a real-time electronic process',
    'SAP data is presented in simplified screens, only information related to tasks at hand is shown – no specialized SAP knowledge needed',
    'Biometrically controlled access to information provides accountability and prevents password sharing / fraudulent access',
  ];
}
