import React, { useContext, useState } from 'react';
import AppContext from '../context/Context';
import '../styles/input.css';

export default function Input() {
  const {
    logged,
    setNeedLogin,
    messages,
    setMessages,
    setLoanOptions,
    username,
  } = useContext(AppContext);
  const [message, setMessage] = useState('');

  const userMessage = (text) => {
    const newMessage = {
      content: text,
      from: logged ? username : 'User',
      to: 'Bot',
      time: new Date(),
    };
    return newMessage;
  };

  const messagesFromBot = {
    Initial: "Hello, I'm your assistant. How can I help you?",
    Goodbye: 'Bye, see you later',
    TryAgain: 'I did not understand, try to say Hello',
    Options: 'Choose one of the options',
    Login: 'You are not logged in. Please register',
    Login2: 'Try to say Hello first',
  };

  const botMessage = (text) => {
    const newMessage = {
      content: text,
      from: 'Bot',
      to: 'User',
      time: new Date(),
    };
    return newMessage;
  };

  const botAnswer = (newUserMessage) => {
    const lowerUserMessage = newUserMessage.content.toLowerCase();
    const initialTerms = ['hello', 'good', 'i want'];
    const endTerms = ['goodbye', 'bye', 'see you later'];

    switch (true) {
      case initialTerms.some((term) => lowerUserMessage.includes(term)):
        setNeedLogin(true);
        return botMessage(messagesFromBot.Login);
      case endTerms.some((term) => lowerUserMessage.includes(term)):
        return botMessage(messagesFromBot.Goodbye);
      case lowerUserMessage.includes('loan') && logged:
        setLoanOptions(true);
        return botMessage(messagesFromBot.Options);
      case lowerUserMessage.includes('loan') && !logged:
        return botMessage(messagesFromBot.Login2);
      default:
        return botMessage(messagesFromBot.TryAgain);
    }
  };

  const handleMessage = () => {
    const newUserMessage = userMessage(message);
    const newBotAnswer = botAnswer(newUserMessage);
    setMessages([...messages, newUserMessage, newBotAnswer]);
    setMessage('');
  };

  return (
    <div className="input-container">
      <div className="input-field-container">
        <input
          type="text"
          className="input-field"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleMessage();
            }
          }}
        />
      </div>
      <button className="send-button" type="button" onClick={handleMessage}>
        Send
      </button>
    </div>
  );
}
