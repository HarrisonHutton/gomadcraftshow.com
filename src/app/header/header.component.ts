import { Component } from '@angular/core';
import { HeaderLink } from '@interfaces/header-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerLinks: HeaderLink[] = [
    { label: 'Register', path: 'register' },
    { label: 'Contact', path: 'contact' },
  ]

}
