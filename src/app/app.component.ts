import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wise-pelican';
}
 // patwkrgN4pqNaWnEI.4d43601e2ed65ff72c6a5402ef5985ac84acab4554ad1339e515793ce69f2263
