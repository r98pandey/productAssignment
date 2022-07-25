
import { ProductListService } from '../../../core/services/product-list.service'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-fav-product-list',
  templateUrl: './fav-product-list.component.html',
  styleUrls: ['./fav-product-list.component.scss']
})
export class FavProductListComponent implements OnInit {
  displayedColumns: string[] = ['thumbnail', 'title', 'brand', 'category', 'price', 'discountPercentage', 'star'];
  dataSource: any

  constructor(private ProductListService: ProductListService) {

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  myFavDat: any
  ngOnInit() {
    this.getProduct();

  }
  getProduct() {
    let favdat = localStorage.getItem('isFav')
    if (favdat) {
      let saveData = []
      saveData = JSON.parse(favdat)
      this.dataSource = new MatTableDataSource(saveData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource = new MatTableDataSource([]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addFavorProduct(row: any) {
    console.log("row", row);

    let favdat: any;
    favdat = localStorage.getItem('isFav')
    if (favdat) {
      let saveData = []
      saveData = JSON.parse(favdat)
      console.log(saveData)
      const index: any = saveData.findIndex((data: any) => data.id == row.id)
      if (index != -1) {
        saveData.splice(index, 1)
      }

      else {
        saveData.push(row)
      }

      localStorage.setItem("isFav", JSON.stringify(saveData))
    } else {
      let data = []
      data.push(row)
      localStorage.setItem("isFav", JSON.stringify(data));
    }
    this.getProduct();
  }

  hidddenButton(row: any) {
    let returnValue = true
    let favdat: any = localStorage.getItem('isFav');
    let saveData = JSON.parse(favdat)
    if (favdat) {
      const index: any = saveData.findIndex((data: any) => data.id == row.id)
      if (index != -1) {
        returnValue = false
      }
      else {
        returnValue = true

      }
    }
    return returnValue;
  }
}

export interface ProductElement {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number,
  price: number,
  thumbnail: any,
  title: any
}



