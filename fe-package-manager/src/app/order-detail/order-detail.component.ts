import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PackageService} from "../services/package.service";
import {OrderDetailDto} from "../dto-models/order-detail-dto";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass']
})
export class OrderDetailComponent implements OnInit {
  id = -1;
  orderDetail: OrderDetailDto = new OrderDetailDto();
  loaded: boolean = false;
  sumPrice: number = 0;

  constructor(private router: ActivatedRoute, private packageService: PackageService, private route: Router) {
  }

  ngOnInit(): void {
    this.id = parseInt(this.router.snapshot.paramMap.get('id') ?? "-1");
    this.loadDetails();
  }

  loadDetails(): void {
    this.loaded = false;
    this.packageService.GetOrderById(this.id).subscribe((response: OrderDetailDto) => {
      this.orderDetail = response
      this.sumPrice = Object.values(this.orderDetail.products).reduce((t, {productPrice}) => t + productPrice, 0)
    }, error => {

    }).add(() => {
      this.loaded = true;
    })
  }

  handleBack() {
    this.route.navigate(['/home']);
  }
}
