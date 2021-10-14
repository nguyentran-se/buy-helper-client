import {
  AddOutlined,
  BarChart,
  Dashboard,
  FoodBankOutlined,
  ListAltOutlined,
  AppRegistration,
} from '@mui/icons-material';
import { PATH_NAME, USER_ROLE } from 'configs';
import React from 'react';
export const initDrawerList = (translate, type) => {
  switch (type) {
    case USER_ROLE.TOWN_LEADER:
      return [
        {
          header: 'Tổ Trưởng',
          list: [
            {
              icon: <Dashboard fontSize="large" />,
              title: 'Tài Khoản',
              to: PATH_NAME.TOWN_LEADER,
              subList: null,
            },
          ],
        },
        {
          header: 'Dashboard',
          list: [
            {
              icon: <AppRegistration fontSize="large" />,
              title: 'Quản Lý',
              isOpenSubList: true,
              subList: [
                {
                  subIcon: <ListAltOutlined fontSize="large" />,
                  subTitle: 'Người Dân',
                  subTo: PATH_NAME.TOWN_LEADER_WATCH,
                },
              ],
            },
          ],
        },
      ];
    default:
      return [
        {
          header: translate('PROVIDER'),
          list: [
            {
              icon: <Dashboard fontSize="large" />,
              title: translate('ACCOUNT'),
              to: PATH_NAME.PROVIDER_ACCOUNT,
              subList: null,
            },
          ],
        },
        {
          header: translate('STATISTIC'),
          list: [
            {
              icon: <BarChart fontSize="large" />,
              title: translate('REPORT'),
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
              title: translate('PRODUCT'),
              isOpenSubList: true,
              subList: [
                {
                  subIcon: <ListAltOutlined fontSize="large" />,
                  subTitle: translate('PRODUCTS'),
                  subTo: PATH_NAME.PROVIDER_PRODUCTS,
                },
                {
                  subIcon: <AddOutlined fontSize="large" />,
                  subTitle: translate('ADD_PRODUCT'),
                  subTo: PATH_NAME.PROVIDER_ADD_PRODUCT,
                },
              ],
            },
          ],
        },
      ];
  }
};
