import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'HOME', icon: 'pi pi-fw pi-home'},
      {label: 'AVAILIBLE PETS', icon: 'pi pi-fw pi-heart'},
      {label: 'SPECIAL CASES', icon: 'pi pi-fw pi-heart-fill'},
      {label: 'HAPPY TAILS', icon: 'pi pi-fw pi-heart'},
      {label: 'ADOPT', icon: 'pi pi-fw pi-heart-fill'},
      {label: 'GET INVOLVED', icon: 'pi pi-fw pi-heart'},
      {label: 'HELP A PET', icon: 'pi pi-fw pi-heart-fill'},
  ];

  this.activeItem = this.items[0];
}
}
