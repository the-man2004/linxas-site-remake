import { Routes } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { SolutionAreasComponent } from './app/solution-areas/solution-areas.component';
import { CaseStudiesComponent } from './app/case-studies/case-studies.component';
import { MultimediaComponent } from './app/multimedia/multimedia.component';
import { TeamComponent } from './app/team/team.component';
import { ContactComponent } from './app/contact/contact.component';

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
