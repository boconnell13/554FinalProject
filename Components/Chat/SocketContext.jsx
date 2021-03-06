import React, { createContext, useContext, useEffect, useState } from "react";
const { io } = require("socket.io-client");

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("https://fathomless-anchorage-00156.herokuapp.com/", {
      query: { id },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
