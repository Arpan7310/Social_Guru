import React from "react";

const Sms = () => {
  return (
    <div>
      <div className="message" id="You">
        <div>
          <div className="message-content">
            <p>Hii</p>
          </div>
          <div className="message-meta">
            <p>2 hours ago</p>
          </div>
        </div>
      </div>
      <div className="message" id="other">
        <div>
          <div className="message-content">
            <p>Hello</p>
          </div>
          <div className="message-meta">
            <p>2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sms;
