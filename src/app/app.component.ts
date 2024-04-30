import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  // selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'angular';
}
