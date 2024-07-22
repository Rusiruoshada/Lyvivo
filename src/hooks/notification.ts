import React from 'react';
import { notification } from 'antd';
import { IconType } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface OpenNotificationTypes {
  type: IconType;
  message: string;
  description: string;
  icon?: React.ReactNode;
  role?: 'alert' | 'status';
  className?: string;
}

const openNotification = ({
  type,
  message,
  description,
  icon,
  role,
  className,
}: OpenNotificationTypes) => {
  notification.open({
    message: message,
    description: description,
    type: type,
    icon: icon,
    role: role,
    className: className,
    
  });
};

export default openNotification;
