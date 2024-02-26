interface ChartPoint{
    value: number
}

export interface ChartDataFromAPI{
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}


export default ChartPoint