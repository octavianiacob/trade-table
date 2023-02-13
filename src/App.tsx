import { useState } from "react";
import TradeTable from "./components/TradeTable";
import Button from "./components/Button";

export interface Trade {
  tradeId: number;
  securityCode: string;
  tradePrice: number;
  tradeVolume: number;
  tradeOwner: string;
}

const sampleTrades: Trade[] = [
  {
    tradeId: 1,
    securityCode: "AAPL",
    tradePrice: 1010,
    tradeVolume: 1000,
    tradeOwner: "John",
  },
  {
    tradeId: 2,
    securityCode: "GOOG",
    tradePrice: 520.5,
    tradeVolume: 500,
    tradeOwner: "Alice",
  },
  {
    tradeId: 3,
    securityCode: "BTC",
    tradePrice: 19520,
    tradeVolume: 2000,
    tradeOwner: "Bob",
  },
];

function App() {
  const [trades, setTrades] = useState(sampleTrades);

  return (
    <div className="App">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold text-4xl">Sample Trades</h1>
        <Button onClick={() => {}}>+</Button>
      </div>
      <TradeTable trades={trades} />
    </div>
  );
}

export default App;
