import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

interface BreadcrumbProps{
    currentPath?:string,
}

const Path: React.FC<BreadcrumbProps> = ({currentPath}) => (

  <Breadcrumb
        items={[
            {
                href: '/',
                title: <HomeOutlined />,
            },
            {
                href: '/collection/all',
                title: <span>All Product</span>
            },
            {
                title: <span>{currentPath}</span>,
            },
        ]}
        separator='>'
        className='mx-10 my-[40px]'
    />
);

export default Path;