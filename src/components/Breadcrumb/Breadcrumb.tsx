import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps{
    currentPath?:string,
    classNames?: string,
}

const Path: React.FC<BreadcrumbProps> = ({currentPath, classNames}) => {

const navigate = useNavigate();

  const handleBreadcrumbClick = (path) => {
    navigate(path);
  };

  const breadcrumbItems = [
    {
        title: <HomeOutlined />,
        path: '/',
    },
    {
        path: '/collection/all',
        title: <span>All Product</span>
    },
    {
        title: <span>{currentPath}</span>,
    },
  ];


  return (
    <Breadcrumb className={`mx-10 my-[40px] ${classNames}`} separator='>'>
      {breadcrumbItems.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          onClick={() => handleBreadcrumbClick(item.path)}
        >
          {item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default Path;