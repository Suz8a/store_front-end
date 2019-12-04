import React, { createContext, useContext } from 'react';
import { Snackbar } from '@material-ui/core';
import useNotification from './notification.hook';

const ctx = createContext({
  snackbar: {},
  notify: (message) => {},
});

export function NotificationProvider({ children }) {
  const hookResult = useNotification();
  return (
    <ctx.Provider value={hookResult}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={4000}
        {...hookResult.snackbar}
      />
    </ctx.Provider>
  );
}

export function useNotificationProvider() {
  return useContext(ctx);
}
