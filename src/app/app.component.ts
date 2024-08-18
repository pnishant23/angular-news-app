import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StoryCreateComponent } from './pages/story-create/story-create.component';
import { StoryListComponent } from './story-list/story-list.component';
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/Header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, StoryCreateComponent, HomepageComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-app';
}
