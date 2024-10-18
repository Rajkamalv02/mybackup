import { Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdisplayComponent } from './projectdisplay/projectdisplay.component';

export const routes: Routes = [
    {path:'', component:ProjectdisplayComponent},
    {path:'addproject', component:AddprojectComponent},

];
