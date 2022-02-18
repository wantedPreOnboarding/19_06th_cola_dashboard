export interface Order {
  id: number;
  source: string;
  outgoingFileName: string;
  movementType: string;
  orderSheetType: string;
  orderId: number;
  relativerProductId: null;
  orderName: string;
  outgoingProductName: string;
  outgoingProductCode: string;
  outgoingProductId: number;
  orderCount: number;
  orderUnit: number;
  outgoingProductCount: number;
  outgoingContainerName: string;
  outOfStockYype: string;
  changeCount: null;
  outgoingProductCancel: null;
  orderInfoId: number;
  outgoingOrderCancled: null;
  ordererName: string;
  ordererPhone: string;
  receiverName: string;
  receiverPhone1: string;
  receiverPhone2: string;
  receiverAddress1: string;
  receiverAddress2: string;
  memo: string;
  courier: string;
}

type OrderSheet = Order[];

export default OrderSheet;
