import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'search', component: SearchComponent},
    {path: 'search-container', component: SearchContainerComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: ''}
];
