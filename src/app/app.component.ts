import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectdisplayComponent } from './projectdisplay/projectdisplay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProjectlistComponent,ProjectdisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
}
