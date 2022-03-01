import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './Notification.scss';

const notify = (message: string, buttonLabel?: string, action?: any, opts?: any) => {
  opts = { className: 'Notification', ...opts }
  toast((t) => (
    <span>
      {message}
      {buttonLabel &&
      <button onClick={() => { toast.dismiss(t.id); action && action(); }}>
        {buttonLabel}
      </button>
      }
    </span>
  ), opts);
};

export const Notification = Toaster;

export default notify;