import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import { Trade } from "../App";

interface AddTradeModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  createTrade: (trade: Trade) => void;
  trades: Trade[];
}

function generateTradeId(trades: Trade[]) {
  return trades.length > 0 ? trades[trades.length - 1].tradeId + 1 : 1;
}

function AddTradeModal({
  isModalOpen,
  onClose,
  createTrade,
  trades,
}: AddTradeModalProps) {
  const [trade, setTrade] = useState<Trade>({
    tradeId: generateTradeId(trades),
    securityCode: "",
    tradePrice: 0,
    tradeVolume: 0,
    tradeOwner: "",
  });

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <div className="bg-white rounded-lg bg-white px-4 pt-5 pb-4 max-w-sm">
        <h1 className="text-2xl font-bold">New Trade</h1>
        <Input
          type="text"
          value={trade.securityCode}
          onChange={(e) => setTrade({ ...trade, securityCode: e.target.value })}
          labelText="Security Code"
        />
        <Input
          type="number"
          value={trade.tradePrice}
          onChange={(e) =>
            setTrade({ ...trade, tradePrice: Number(e.target.value) })
          }
          labelText="Trade Price"
        />
        <Input
          type="number"
          value={trade.tradeVolume}
          isInteger={true}
          onChange={(e) =>
            setTrade({ ...trade, tradeVolume: Number(e.target.value) })
          }
          labelText="Trade Volume"
        />
        <Input
          type="text"
          value={trade.tradeOwner}
          onChange={(e) => setTrade({ ...trade, tradeOwner: e.target.value })}
          labelText="Trade Owner"
        />
        <div className="m-5 flex justify-center gap-6">
          <Button onClick={() => createTrade(trade)}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}

export default AddTradeModal;
