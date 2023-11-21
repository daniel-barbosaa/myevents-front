/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, ConfigProvider } from 'antd';

export function InputPassword() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7E52DE',
          borderRadius: 2,
          colorBgContainer: '#15151A',
          colorBorder: '#7E52DE',
          lineWidthFocus: '#ffff',
          colorText: '#C8C3C1',
          colorFillContentHover: '#be4718'
        },
      }}
    >
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </ConfigProvider>
  );
}
