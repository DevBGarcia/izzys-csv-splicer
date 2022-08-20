import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import useUpdateEffect from '../customHooks/useUpdateEffect';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    lineHeight: 1,
    letterSpacing: 'unset',
    padding:'2px 16px'
  }));

  const StyledTableHeader = styled(TableCell)(({ theme }) => ({
    lineHeight: 1,
    letterSpacing: 'unset',
    padding: 16,
    fontWeight: 'bold'
  }));

const TableFullFilePreview = (props) => {

    const {
        parsedInputFileHeaders,
        parsedInputFileRows
    } = props

    const [tableHeaders, setTableHeaders] = useState([])
    const [tableRows, setTableRows] = useState([])
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    useUpdateEffect(() => {
        if (parsedInputFileHeaders && parsedInputFileRows) {
            setTableHeaders(parsedInputFileHeaders)
            setTableRows(parsedInputFileRows)
        }

    }, [parsedInputFileRows])

    useUpdateEffect(() => {
        console.log('BG - tableRows: ', tableRows)

    }, [tableRows])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

    function createTableHeadersCells(tableHeaders) {
        return tableHeaders.map((header, index) => <StyledTableHeader key={header + index} align="left">{header}</StyledTableHeader>)
    }

    function createTableRowCells(tableRow) {
        return Object.keys(tableRow).map((key, index) => <StyledTableCell key={key.toString() + index.toString()} align="left">{tableRow[key] !== "" ? tableRow[key] : 'N/A'}</StyledTableCell>)
    }

    return (
        <div componentfile='TableFullFilePreview.js' style={{ width: '100%', border:'1px solid rgba(224, 224, 224, 1)' }}>
            <TableContainer style={{height: 640}}>
                <Table sx={{ minWidth: 650 }}>
                    {tableHeaders.length !== 0 &&
                    <TableHead>
                        <TableRow
                        >
                            {createTableHeadersCells(tableHeaders)}
                        </TableRow>
                    </TableHead>}
                    <TableBody>
                        {tableRows.length !== 0 && tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <StyledTableRow
                                key={row[0].toString() + index.toString()}
                            >
                                {createTableRowCells(row)}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={false}
                component="div"
                count={tableRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
        </div>
    );
}

export default TableFullFilePreview