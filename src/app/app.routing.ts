import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SummaryExplorerComponent} from './summary-explorer/summary-explorer.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {SummaryEditorComponent} from './summary-editor/summary-editor.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'explore', component: SummaryExplorerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'summarize', component: SummaryEditorComponent},
  {path: '**', component: HomePageComponent},

];
export const routing = RouterModule.forRoot(appRoutes);
