import React from 'react';
import './style.scss';

const History = (props) => {
  return (
    <div
      className="History"
    >
      {
        props.messages.map((message, index) => {
          if (!message.roomId) {
            return (
              <div
                key={index}
                className="row"
              >
                <div
                  className="col-md-6 offset-md-3 my-3 px-0"
                >
                  <div
                    className="message-center"
                  >
                    {message.body}
                  </div>
                </div>
              </div>
            );
          }

          if (message.clientId === props.clientId) {
            return (
              <div
                key={index}
                className="row"
              >
                <div
                  className="col-md-6 offset-md-6 my-3 px-0"
                >
                  <span
                    className="message-right"
                  >
                    {message.body}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="row"
            >
              <div
                className="col-md-6 my-3 px-0"
              >
                <span
                  className="message-left"
                >
                  {message.body}
                </span>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default History;
