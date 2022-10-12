import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'study',
    loadChildren: () => import('./study/study.module').then( m => m.StudyPageModule)
  },
  {
    path: 'current-students',
    loadChildren: () => import('./current-students/current-students.module').then( m => m.CurrentStudentsPageModule)
  },
  {
    path: 'news-and-events',
    loadChildren: () => import('./news-and-events/news-and-events.module').then( m => m.NewsAndEventsPageModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./research/research.module').then( m => m.ResearchPageModule)
  },
  {
    path: 'quick-links',
    loadChildren: () => import('./quick-links/quick-links.module').then( m => m.QuickLinksPageModule)
  },
  {
    path: 'our-services',
    loadChildren: () => import('./our-services/our-services.module').then( m => m.OurServicesPageModule)
  },
  {
    path: 'alumni-and-supporters',
    loadChildren: () => import('./alumni-and-supporters/alumni-and-supporters.module').then( m => m.AlumniAndSupportersPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'more-information',
    loadChildren: () => import('./more-information/more-information.module').then( m => m.MoreInformationPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
