import React from 'react';
import { Alert } from 'antd';


const Notification: React.FC = () => (
  <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
    />
);

export default Notification;