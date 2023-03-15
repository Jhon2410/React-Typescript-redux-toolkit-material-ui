import { TableCell as MUITableCell, TableCellProps } from '@mui/material';

interface Props extends TableCellProps {
    value?: string;
}

export default function TableCell(props: Props) {
  return <TableCell align="center" colSpan={2} {...props}>{props.value}</TableCell>;
}
