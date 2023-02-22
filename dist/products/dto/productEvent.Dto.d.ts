export declare class ProductEventDto {
    productId: number;
    productName: string;
    productSize: number;
    productImage: string;
    productPrice: number;
    tradeInfo: TradeInfosDto[];
}
export declare class TradeInfosDto extends ProductEventDto {
    tradeInfoId: number;
    price: number;
    date: string;
}
