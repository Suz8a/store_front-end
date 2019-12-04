import React, { useState } from "react";

function useNotification() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  function handleClose() {
    setOpen(false);
  }

  function notify(message) {
    setMessage(<span>{message}</span>);
    setOpen(true);
  }

  return {
    notify,
    snackbar: {
      open,
      onClose: handleClose,
      message
    }
  };
}

export default useNotification;
