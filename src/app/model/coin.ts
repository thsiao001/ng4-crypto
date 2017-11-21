export class Coin {
    constructor(
        public id: string,
        public rank: number,
        public symbol: string,
        public price_usd: string,
        public price_btc: string,
        public 24h_volume_usd: string,
        public available_supply: string,
        public total_supply: string,
        public market_cap_usd: string
    ){}
}