import { ProductDto } from "./product-dto";

export class OrderDetailDto {
  public orderId: number= -1;
  public packageId: string= "";
  public status: string= "";
  public statusShortHand: string = "";
  public description: string = "";
  public products: ProductDto[] = [];
}
