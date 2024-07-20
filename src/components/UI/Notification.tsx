import React, { ReactNode } from 'react';
import { Button, notification, Space } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    children?: ReactNode;
    className?: string;
}

const Notification: React.FC<NotificationProps> = ({children,className}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    
    });
  };

  return (
    <>
      {contextHolder}
      <Space className={className} onClick={() => openNotificationWithIcon('success')}>
        {children}
      </Space>
    </>
  );
};

export default Notification;