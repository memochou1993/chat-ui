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
                className="d-flex"
              >
                <div
                  className="col my-2 px-0"
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
                className="d-flex"
              >
                <div
                  className="col-10 offset-2 col-sm-6 offset-sm-6 col-md-8 offset-md-4 my-2 px-0"
                >
                  <div
                    className="d-flex message message-right"
                  >
                    <div
                      className="col px-2"
                    >
                      {message.body}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="d-flex"
            >
              <div
                className="col-10 col-sm-6 col-md-8 my-2 px-0"
              >
                <div
                  className="d-flex message message-left"
                >
                  <div
                    className="col px-2"
                  >
                    {message.body}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default History;
