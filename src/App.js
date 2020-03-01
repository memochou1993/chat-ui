import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import History from './components/History';
import Input from './components/Input';
import { connect, send } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    connect((state) => {
      const effectMessage = JSON.parse(state.data);

      if (!effectMessage.roomId) {
        const effectClientId = process.env.NODE_ENV !== 'production'
          ? btoa((new URLSearchParams(window.location.search)).get('host'))
          : effectMessage.clientId;

        setClientId(effectClientId);

        if (effectClientId === effectMessage.clientId) {
          return;
        }
      }

      setMessages((prevState) => {
        return [...prevState, effectMessage];
      });
    });
  }, []);

  const handleSubmit = (event) => {
    if (message) {
      send(message);
      setMessage('');
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
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
              className="overflow-auto"
            >
              <History
                clientId={clientId}
                messages={messages}
              />
            </div>
            <div
              id="footer"
            >
              <Input
                submit={handleSubmit}
                value={message}
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
