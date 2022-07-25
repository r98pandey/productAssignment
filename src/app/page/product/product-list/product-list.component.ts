import { ProductListService } from '../../../core/services/product-list.service'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
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
    this.ProductListService.getproducts().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log("res", this.dataSource);

    }, (err) => {
      console.log(err)
    })
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



