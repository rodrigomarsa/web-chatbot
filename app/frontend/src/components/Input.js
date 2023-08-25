import React, { useContext, useState } from 'react';
import AppContext from '../context/Context';

export default function Input() {
  const { username, messages, setMessages } = useContext(AppContext);
  const [message, setMessage] = useState('');

  const handleMessage = () => {
    const newMessage = {
      username,
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div>
      <form>
        <label htmlFor="message">
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleMessage();
            }}
          />
          <button type="button" onClick={handleMessage}>
            Send
          </button>
        </label>
      </form>
    </div>
  );
}
