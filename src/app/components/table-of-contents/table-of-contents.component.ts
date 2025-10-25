import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface ContentData {
  tableOfContents: string[];
}

@Component({
  selector: 'app-table-of-contents',
  imports: [CommonModule],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.scss'
})
export class TableOfContentsComponent implements OnInit {
  contentData: ContentData | null = null;
  isExpanded = false;
  itemsPerPage = 6;
  visibleItems: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadContentData();
  }

  loadContentData() {
    this.http.get<ContentData>('assets/data/content.json').subscribe({
      next: (data) => {
        this.contentData = data;
        this.updateVisibleItems();
        console.log('Table of contents data loaded successfully:', this.contentData);
      },
      error: (error) => {
        console.error('Error loading table of contents data:', error);
      }
    });
  }

  updateVisibleItems() {
    if (this.contentData) {
      if (this.isExpanded) {
        this.visibleItems = this.contentData.tableOfContents;
      } else {
        this.visibleItems = this.contentData.tableOfContents.slice(0, this.itemsPerPage);
      }
    }
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    this.updateVisibleItems();
  }

  getButtonText(): string {
    return this.isExpanded ? 'SHOW LESS' : 'SHOW MORE';
  }
}
