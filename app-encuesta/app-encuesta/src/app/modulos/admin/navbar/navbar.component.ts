import { Component} from '@angular/core';
import { SidebarService } from 'src/app/servicios/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent  {

  constructor(private sidebarService: SidebarService) {}



  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
