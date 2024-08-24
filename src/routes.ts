import { Routes } from '@angular/router';

import { HomeComponent } from './app/routes/home/home.component';
import { AboutComponent } from './app/routes/about/about.component';
import { SolutionAreasComponent } from './app/routes/solution-areas/solution-areas.component';
import { CaseStudiesComponent } from './app/routes/case-studies/case-studies.component';
import { MultimediaComponent } from './app/routes/multimedia/multimedia.component';
import { TeamComponent } from './app/routes/team/team.component';
import { ContactComponent } from './app/routes/contact/contact.component';

import { FinanceComponent } from './app/routes/solution-areas/finance/finance.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'CheckIDInSAP',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About - CheckIDInSAP',
  },
  {
    path: 'solution-areas',
    component: SolutionAreasComponent,
    title: 'Solution Areas - CheckIDInSAP',
  },
  // --------------------
  {
    path: 'solution-areas/finance',
    component: FinanceComponent,
    title: 'Solution Areas - CheckIDInSAP',
  },
  // ---------------------
  {
    path: 'case-studies',
    component: CaseStudiesComponent,
    title: 'Case Studies - CheckIDInSAP',
  },
  {
    path: 'multimedia',
    component: MultimediaComponent,
    title: 'Multimedia - CheckIDInSAP',
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Team - CheckIDInSAP',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - CheckIDInSAP',
  },
];

export default routeConfig;
