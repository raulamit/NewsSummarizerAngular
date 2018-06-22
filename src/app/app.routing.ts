import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SummaryExplorerComponent} from './summary-explorer/summary-explorer.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'explore', component: SummaryExplorerComponent},
  {path: '**', component: HomePageComponent},

];
export const routing = RouterModule.forRoot(appRoutes);
