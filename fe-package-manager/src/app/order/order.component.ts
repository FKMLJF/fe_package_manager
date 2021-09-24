import {Component, Input, OnInit} from '@angular/core';
import {OrderDto} from "../dto-models/order-dto.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  @Input()  order : OrderDto = new OrderDto()
  constructor() { }

  ngOnInit(): void {
  }

}
