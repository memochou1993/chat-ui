const Socket = () => {
  const socket = new WebSocket(`${process.env.REACT_APP_API_URL}?clientId=${localStorage.getItem('clientId') || ''}`);

  return {
    connect: (callback) => {
      socket.onopen = (event) => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Connection Opened: ', event);
        }
      };
      socket.onmessage = (message) => {
        callback(message);
      };
      socket.onclose = (event) => {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Connection Closed: ', event);
        }
      };
      socket.onerror = (error) => {
        console.error(error);
      };
    },
    send: (message) => {
      socket.send(message);
    },
  };
};

export default Socket;
