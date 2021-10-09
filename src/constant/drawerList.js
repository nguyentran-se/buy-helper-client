import {
  AddOutlined,
  BarChart,
  Dashboard,
  FoodBankOutlined,
  ListAltOutlined,
} from '@mui/icons-material';
import { PATH_NAME } from 'configs';
import React from 'react';

export const initDrawerList = [
  {
    header: 'Account Management',
    list: [
      {
        icon: <Dashboard fontSize="large" />,
        title: 'Account',
        to: PATH_NAME.PROVIDER_ACCOUNT,
        subList: null,
      },
    ],
  },
  {
    header: 'Statistic',
    list: [
      {
        icon: <BarChart fontSize="large" />,
        title: 'Report',
        to: PATH_NAME.PROVIDER_REPORT,
        subList: null,
      },
    ],
  },
  {
    header: 'Dashboard',
    list: [
      {
        icon: <FoodBankOutlined fontSize="large" />,
        title: 'Product',
        isOpenSubList: true,
        subList: [
          {
            subIcon: <ListAltOutlined fontSize="large" />,
            subTitle: 'Products',
            subTo: PATH_NAME.PROVIDER_PRODUCTS,
          },
          {
            subIcon: <AddOutlined fontSize="large" />,
            subTitle: 'Add Product',
            subTo: PATH_NAME.PROVIDER_ADD_PRODUCT,
          },
        ],
      },
    ],
  },
];
