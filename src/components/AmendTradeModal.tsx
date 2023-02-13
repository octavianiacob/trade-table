import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import { Trade } from "../App";

interface AddTradeModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  selectedTrade: Trade;
  updateTrade: (trade: Trade) => void;
}

function AmendTradeModal({
  isModalOpen,
  onClose,
  selectedTrade,
  updateTrade,
}: AddTradeModalProps) {
  const [trade, setTrade] = useState<Trade>(selectedTrade);
  const handleUpdate = () => {
    updateTrade(trade);
    onClose();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <div className="bg-white rounded-lg bg-white px-4 pt-5 pb-4 max-w-lg">
        <h1 className="text-2xl font-bold">Amend Trade</h1>
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
          <Button onClick={handleUpdate}>Add</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}

export default AmendTradeModal;
