const socket = new WebSocket(`${process.env.REACT_APP_API_URL}${window.location.search}`);

const connect = (callback) => {
  console.log('Attempting Connection...');

  socket.onopen = (event) => {
    console.log('Connection Opened: ', event);
  };

  socket.onmessage = (message) => {
    console.log(message);
    callback(message);
  };

  socket.onclose = (event) => {
    console.log('Connection Closed: ', event);
  };

  socket.onerror = (error) => {
    console.log('Socket Error: ', error);
  };
};

const send = (message) => {
  socket.send(message);
};

export {
  connect,
  send,
};
