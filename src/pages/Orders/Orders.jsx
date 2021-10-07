import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { PATH_NAME } from 'configs';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Orders = () => {
  const today = new Date();
  const date = '0' + today.getDate().toString();
  const month = '0' + (today.getMonth() + 1).toString();
  const year = today.getFullYear();
  const matchPath = useRouteMatch().path;
  return (
    <Box sx={{ pt: 1 }}>
      <Typography variant="h5" component="h2" marginBottom={3}>
        <Link to={PATH_NAME.CATEGORY_GENRE}>Trang chủ</Link> {'>'} Đơn hàng của
        tôi
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ '& .MuiTableCell-root': { fontSize: '16px' } }}>
            <TableRow>
              <TableCell>#Đơn hàng</TableCell>
              <TableCell align="center">Ngày mua</TableCell>
              <TableCell
                align="center"
                sx={{ display: ['none', 'table-cell'] }}
              >
                Tổng tiền
              </TableCell>
              <TableCell
                align="center"
                sx={{ display: ['none', 'table-cell'] }}
              >
                Trạng thái đơn hàng
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ '& .MuiTableCell-root': { fontSize: '13px' } }}>
            {Array(10)
              .fill()
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography
                      color="primary"
                      component={Link}
                      to={`${matchPath}/detail/86868686`}
                    >
                      {86868686}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {`${date.slice(-2)}/${month.slice(-2)}/${year}`}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: ['none', 'table-cell'] }}
                  >
                    {'68.000đ'}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ display: ['none', 'table-cell'] }}
                  >
                    Chờ xử lí
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      component={Link}
                      sx={{ textTransform: 'none' }}
                      to={`${matchPath}/detail/86868686`}
                    >
                      Xem đơn hàng
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* <Stack direction="row" spacing={4} sx={{ p: 2 }} elevation={0}>
          <Box>
            <Typography variant="body1">Mã đơn hàng</Typography>
            <Typography
              color="primary"
              component={Link}
              to={`${matchPath}/detail/86868686`}
            >
              {86868686}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Ngày mua</Typography>
            <Typography variant="body1" color="textPrimary">
              {`${date.slice(-2)}/${month.slice(-2)}/${year}`}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">Tổng tiền</Typography>
            <Typography variant="body1" color="textPrimary">
              {'68.000đ'}
            </Typography>
          </Box>
        </Stack> */}
        {/* <Divider /> */}
      </TableContainer>
    </Box>
  );
};

export default Orders;
