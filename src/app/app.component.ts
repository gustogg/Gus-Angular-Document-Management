import { Component } from '@angular/core';
import { faHome, faPhone, faInfoCircle, faUserPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bcaf-0409';
  icons = {
    home: faHome,
    phone: faPhone,
    info: faInfoCircle,
    user: faUserPlus,
    github: faUserCircle


  }

  
}
