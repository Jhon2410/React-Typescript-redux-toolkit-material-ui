import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { Column } from '../../../types/Type';



interface EnhancedTableProps {
  columns: Column[];
  rows: any[];
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EnhancedTable(props: EnhancedTableProps) {
  const { columns, rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = props;

  const renderTableHeader = () => (
    <TableHead>
      <TableRow>
        {columns.map((column : Column) => (
          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const renderTableBody = () => (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column : Column) => {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );

  return (
    <TableContainer component={Paper}  sx={{  width : "80%", mx:"auto" }}>
      <Table  aria-label="enhanced table">
        {renderTableHeader()}
        {renderTableBody()}
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
