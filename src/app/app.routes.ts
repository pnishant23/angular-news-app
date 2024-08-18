import { RouterModule, Routes } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoryCreateComponent } from './pages/story-create/story-create.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'create-new-stories', component: StoryCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }