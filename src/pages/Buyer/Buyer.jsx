import React from 'react';
// import { useTranslation } from 'react-i18next';
import AccountFrame from 'shared/AccountFrame/AccountFrame';
const Buyer = () => {
  // const { t: translate } = useTranslation();

  const buyerProfile = [
    {
      name: 'account',
      label: 'Loại Tài Khoản',
      defaultValue: 'Người Mua Hàng',
    },
    {
      name: 'email',
      label: 'Email',
      defaultValue: 'buyer@gmail.com',
    },
    {
      name: 'phone',
      label: 'Điện Thoại',
      defaultValue: '0123 456 789',
    },
    {
      name: 'province',
      label: 'Tỉnh/Thành Phố',
      defaultValue: 'Đà Nẵng',
    },
    {
      name: 'district',
      label: 'Huyện/Quận',
      defaultValue: 'Hải Châu',
    },
    {
      name: 'ward',
      label: 'Xã/Phường',
      defaultValue: 'Hòa Cường',
    },
    {
      name: 'street',
      label: 'Địa Chỉ',
      defaultValue: '2/9',
    },
  ];
  return <AccountFrame lang="vn" user={buyerProfile} />;
};

export default Buyer;
