import React, { forwardRef, RefObject } from "react";

interface ContextMenuProps {
  position: { x: number; y: number };
  handleModalOpen: () => void;
  handleDelete: () => void;
}

const ContextMenu = forwardRef(
  ({ position, handleModalOpen, handleDelete }: ContextMenuProps, ref) => {
    return (
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className="absolute z-10"
        style={{
          top: position.y,
          left: position.x,
        }}
      >
        <div className="bg-white shadow-lg rounded-lg py-2">
          <button
            type="button"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            onClick={handleModalOpen}
          >
            Amend Trade
          </button>
          <button
            type="button"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
            onClick={handleDelete}
          >
            Delete Trade
          </button>
        </div>
      </div>
    );
  }
);

export default ContextMenu;
