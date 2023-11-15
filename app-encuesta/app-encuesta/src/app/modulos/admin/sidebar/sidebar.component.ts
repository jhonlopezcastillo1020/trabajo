import { Component } from '@angular/core';
import { SidebarService } from 'src/app/servicios/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(private sidebarService: SidebarService) {}



  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
