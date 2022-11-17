import React from "react";
import { Toaster } from "react-hot-toast";
const Messages = () => {
  return (
    <Toaster
      toastOptions={{
        className: "toaster",
        duration: 3000,
        success: {
          style: {
            background: "blue",
            color: "white",
            fontWeight: "600",
          },
        },
        error: {
          style: {
            background: "red",
            color: "black",
            fontWeight: "900",
          },
        },
      }}
    />
  );
};

export default Messages;
