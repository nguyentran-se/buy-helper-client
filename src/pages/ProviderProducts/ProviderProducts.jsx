import React from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
  tableCellClasses,
} from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
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
const ProviderProducts = () => {
  const { t: translate } = useTranslation();
  return (
    <div>
      <Typography variant="h5" component="h3" gutterBottom>
        {translate('PRODUCTS')}
      </Typography>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>{translate('NAME')}</StyledTableCell>
            <StyledTableCell>{translate('PRICE')}(VNĐ)</StyledTableCell>
            <StyledTableCell>{translate('CATEGORY')}</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Array(6)
            .fill()
            .map((_, index) => (
              <StyledTableRow key={index}>
                <TableCell align="center">Mì Hảo Hảo</TableCell>
                <TableCell align="center">2000</TableCell>
                <TableCell align="center">Thực phẩm</TableCell>
                <TableCell align="center">
                  <Tooltip title={translate('DELETE')}>
                    <IconButton color="error">
                      <DeleteForever />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProviderProducts;
