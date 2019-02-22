import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
  private pagination: Object
  
  public get getPaginationObject() : Object {
    return this.pagination;
  }

  setPagination(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;

    if(totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if(currentPage <= 3){
        startPage = 1;
        endPage = 5
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } 
      else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

    let pages = range(startPage, endPage + 1)

    this.pagination = {
      currentPage,
      pageSize,
      totalPages,
      pages
    }
  }
}
