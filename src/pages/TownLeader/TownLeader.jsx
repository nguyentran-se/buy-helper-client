import React from 'react';
import AccountFrame from 'shared/AccountFrame/AccountFrame';

const TownLeader = () => {
  const townLeaderProfile = [
    {
      name: 'account',
      label: 'Loại Tài Khoản',
      defaultValue: 'Tổ Trưởng',
    },
    {
      name: 'email',
      label: 'Email',
      defaultValue: 'townleader@gmail.com',
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
      defaultValue: 'Hòa Vang',
    },
    {
      name: 'ward',
      label: 'Xã/Phường',
      defaultValue: 'Hòa Nhơn',
    },
    {
      name: 'street',
      label: 'Địa Chỉ',
      defaultValue: 'QL1A',
    },
  ];
  return <AccountFrame lang="vn" user={townLeaderProfile} />;
};

export default TownLeader;
