import React from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/system';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    // color: theme.palette.common.white,
    textAlign: 'center',
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '& td, th': {
    border: '1px solid',
  },
  // hide last border
  // '&:last-child td, &:last-child th': {
  //   // borderBottom: 0,
  // },
}));
const TownLeaderWatch = () => {
  const today = new Date();
  const date = '0' + today.getDate().toString();
  const month = '0' + (today.getMonth() + 1).toString();
  const year = today.getFullYear();
  return (
    <div>
      <Typography variant="h5" component="h3" gutterBottom>
        Danh sách người dân mua hàng
      </Typography>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Tên</StyledTableCell>
            <StyledTableCell>Đơn hàng</StyledTableCell>
            <StyledTableCell>Ngày mua</StyledTableCell>
            <StyledTableCell>Tổng tiền</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Array(6)
            .fill()
            .map((_, index) => (
              <StyledTableRow key={index}>
                <TableCell align="center">Nguyễn Văn User</TableCell>
                <TableCell align="center">#86868686</TableCell>
                <TableCell align="center">
                  {`${date.slice(-2)}/${month.slice(-2)}/${year}`}
                </TableCell>
                <TableCell align="center">68.000đ</TableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TownLeaderWatch;
