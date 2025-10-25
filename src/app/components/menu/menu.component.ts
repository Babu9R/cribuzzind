import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface MenuItem {
  type: string;
  name: string;
  icon: string;
  link: string;
  subItems?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  @Input() isMenuOpen = false;
  @Output() closeMenu = new EventEmitter<void>();
  menuItems: MenuItem[] = [];
  expandedGroups: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMenuData();
  }

  loadMenuData() {
    console.log('Attempting to load menu data from: assets/data/menu.json');
    this.http.get<{menuItems: MenuItem[]}>('assets/data/menu.json').subscribe({
      next: (data) => {
        this.menuItems = data.menuItems;
        console.log('Menu data loaded successfully:', this.menuItems);
      },
      error: (error) => {
        console.error('Error loading menu data:', error);
        console.error('Full error details:', error);
      }
    });
  }

  onCloseMenu() {
    this.closeMenu.emit();
  }

  toggleGroup(groupName: string) {
    if (this.expandedGroups.includes(groupName)) {
      this.expandedGroups = this.expandedGroups.filter(name => name !== groupName);
    } else {
      this.expandedGroups.push(groupName);
    }
  }

  isGroupExpanded(groupName: string): boolean {
    return this.expandedGroups.includes(groupName);
  }

  navigateToLink(link: string) {
    this.onCloseMenu();
    // Add navigation logic here
    console.log('Navigate to:', link);
  }
}
