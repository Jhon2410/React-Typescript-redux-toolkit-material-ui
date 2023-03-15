import React from "react";

type TableFooterCellProps = {
  colSpan?: number;
  children: React.ReactNode;
};

export function TableFooterCell(props: TableFooterCellProps) {
  const { colSpan, children } = props;
  return (
    <td colSpan={colSpan} className="border px-4 py-2">
      {children}
    </td>
  );
}
