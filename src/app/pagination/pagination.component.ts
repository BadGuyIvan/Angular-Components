import { Component, OnInit } from '@angular/core';

import { PagerService } from './service/pager.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [PagerService]
})
export class PaginationComponent implements OnInit {

  pager: any = {};
  pagedItems: any[];
  private allItems: any[];
  Items: number[];

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.Items = Array.apply(null, {length: 300}).map(Number.call, Number);
    this.allItems = this.Items;
    this.setPage(1);
  }

  setPage(page: number) {
    if(page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pagerService.setPagination(this.allItems.length, page)
    this.pager = this.pagerService.getPaginationObject;

    let begin: number = (this.pager.currentPage-1)*this.pager.pageSize;
    let end: number = begin + this.pager.pageSize;
    this.pagedItems = this.allItems.slice(begin, end);
  }
}
