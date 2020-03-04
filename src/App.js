import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import History from './components/History';
import Input from './components/Input';
import { connect, send } from './plugins/websocket';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const App = () => {
  const anchor = useRef();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const callback = (state) => {
      const message = JSON.parse(state.data);

      if (!localStorage.getItem('clientId')) {
        localStorage.setItem('clientId', message.clientId);
      }

      if (!message.roomId && message.clientId === localStorage.getItem('clientId')) {
        return;
      }

      setMessages((prev) => [...prev, message]);

      anchor.current.scrollTop = anchor.current.scrollHeight;
    };

    connect(callback);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input) {
      send(input);
      setInput('');
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div
      className="App h-100"
    >
      <div
        className="container-fluid h-100 bg-secondary"
      >
        <div
          className="d-flex h-100"
        >
          <div
            className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-self-center h-100 px-0 bg-light"
          >
            <div
              id="header"
            >
              <Header />
            </div>
            <div
              id="body"
              ref={anchor}
              className="overflow-auto"
            >
              <History
                messages={messages}
              />
            </div>
            <div
              id="footer"
            >
              <Input
                submit={handleSubmit}
                value={input}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
