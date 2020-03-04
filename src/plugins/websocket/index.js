const socket = new WebSocket(`${process.env.REACT_APP_API_URL}?clientId=${localStorage.getItem('clientId') || ''}`);

const connect = (callback) => {
  socket.onopen = (event) => {
    console.warn('Connection Opened: ', event);
  };

  socket.onmessage = (message) => {
    callback(message);
  };

  socket.onclose = (event) => {
    console.warn('Connection Closed: ', event);
  };

  socket.onerror = (error) => {
    console.error(error);
  };
};

const send = (message) => {
  socket.send(message);
};

export {
  connect,
  send,
};
