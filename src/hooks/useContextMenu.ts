import React, { useEffect, useRef, useState } from "react";
import { Trade } from "../App";

function useContextMenu(initialState = false) {
  const [showContextMenu, setShowContextMenu] = useState(initialState);
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const openContextMenu = (
    e: React.MouseEvent<HTMLTableRowElement>,
    trade: Trade
  ) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setSelectedTrade(trade);
    setShowContextMenu(true);
  };

  const closeContextMenu = () => setShowContextMenu(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target as Node)
      ) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    showContextMenu,
    contextMenuPosition,
    contextMenuRef,
    openContextMenu,
    closeContextMenu,
    selectedTrade,
  };
}

export default useContextMenu;