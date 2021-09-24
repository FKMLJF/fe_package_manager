import {Component, OnInit} from '@angular/core';
import {PackageService} from "../services/package.service";
import {OrderDto} from "../dto-models/order-dto.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Orders: OrderDto[] = [];
  loaded = false;
  packageId: string = "";

  constructor(private packageService: PackageService) {
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.loaded = false;
    this.packageService.getOrders().subscribe((response : OrderDto[])  => {
          this.Orders = response;
      },
      error => {

      }).add(() => {
        this.loaded = true;
    })
  }

  FindOrdersByPackageId() {
    if(this.packageId != "") {
      this.loaded = false;
      this.packageService.findOrdersByPackageId(this.packageId).subscribe((response: OrderDto[]) => {
          this.Orders = response;
        },
        error => {

        }).add(() => {
        this.loaded = true;
      })
    }
  }

  handleOnEnter(event: any) {
    if(event.keyCode == 13){
      this.FindOrdersByPackageId();
    }
  }
}
