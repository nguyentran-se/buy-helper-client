import React from 'react';
import { useTranslation } from 'react-i18next';
import AccountFrame from 'shared/AccountFrame/AccountFrame';

const ProviderAccount = () => {
  const { t: translate } = useTranslation();

  const providerProfile = [
    {
      name: 'account',
      label: translate('ACCOUNT_TYPE'),
      defaultValue: 'Provider',
    },
    {
      name: 'email',
      label: 'Email',
      defaultValue: 'provider1@gmail.com',
    },
    {
      name: 'phone',
      label: translate('PHONE'),
      defaultValue: '0123 456 789',
    },
    {
      name: 'province',
      label: translate('PROVINCE'),
      defaultValue: 'Đà Nẵng',
    },
    {
      name: 'district',
      label: translate('DISTRICT'),
      defaultValue: 'Ngũ Hành Sơn',
    },
    {
      name: 'ward',
      label: translate('WARD'),
      defaultValue: 'Hòa Hải',
    },
    {
      name: 'street',
      label: translate('STREET'),
      defaultValue: 'Nam Kỳ Khởi Nghĩa',
    },
  ];
  return <AccountFrame user={providerProfile} />;
};

export default ProviderAccount;
