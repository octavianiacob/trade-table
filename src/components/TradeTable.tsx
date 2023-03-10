import React, { useState } from "react";
import { Trade } from "../App";
import useContextMenu from "../hooks/useContextMenu";
import AmendTradeModal from "./AmendTradeModal";
import ContextMenu from "./ContextMenu";

interface TradeTableProps {
  trades: Trade[];
  updateTrade: (trade: Trade) => void;
  deleteTrade: (tradeId: number) => void;
}

const emptyTrade: Trade = {
  tradeId: 0,
  securityCode: "",
  tradePrice: 0,
  tradeVolume: 0,
  tradeOwner: "",
};

function TradeTable({ trades, updateTrade, deleteTrade }: TradeTableProps) {
  const [isAmendModalOpen, setIsAmendModalOpen] = useState(false);
  const {
    showContextMenu,
    contextMenuPosition,
    contextMenuRef,
    openContextMenu,
    closeContextMenu,
    selectedTrade,
  } = useContextMenu();

  const handleModalOpen = () => {
    setIsAmendModalOpen(true);
    closeContextMenu();
  };
  const handleModalClose = () => setIsAmendModalOpen(false);
  const handleDelete = () => {
    if (!selectedTrade) return;
    deleteTrade(selectedTrade.tradeId);
    closeContextMenu();
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-300 border-2">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
            >
              Trade ID
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
            >
              Security Code
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
            >
              Trade Price($)
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
            >
              Trade Volume
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
            >
              Trade Owner
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {trades.map((trade) => (
            <tr
              key={trade.tradeId}
              className="hover:bg-gray-100"
              onContextMenu={(e) => openContextMenu(e, trade)}
            >
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {trade.tradeId}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {trade.securityCode}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {trade.tradePrice.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {trade.tradeVolume.toLocaleString("en-US")}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {trade.tradeOwner}
              </td>
            </tr>
          ))}
          {trades.length === 0 && (
            <tr>
              <td className="whitespace-nowrap py-4 pl-4 text-sm font-bold text-gray-900 sm:pl-6">
                No trades
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showContextMenu && (
        <ContextMenu
          ref={contextMenuRef}
          position={contextMenuPosition}
          handleModalOpen={handleModalOpen}
          handleDelete={handleDelete}
        />
      )}
      {isAmendModalOpen && (
        <AmendTradeModal
          isModalOpen={isAmendModalOpen}
          onClose={handleModalClose}
          selectedTrade={selectedTrade ?? emptyTrade}
          updateTrade={updateTrade}
        />
      )}
    </>
  );
}

export default TradeTable;
