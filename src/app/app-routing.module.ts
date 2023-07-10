import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { DiaryComponent } from './diary/diary.component';
import { BreatheHoldTrainingAppComponent } from './breathe-hold-training-app/breathe-hold-training-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'leetcode', component: LeetcodeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'portfolio/breathe-hold-training-app', component: BreatheHoldTrainingAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
