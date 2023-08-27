import React, { useContext, useState } from 'react';
import AppContext from '../context/Context';
import RegisterForms from './RegisterForms';

export default function Input() {
  const {
    logged,
    needLogin,
    setNeedLogin,
    messages,
    setMessages,
    setLoanOptions,
  } = useContext(AppContext);
  const [message, setMessage] = useState('');

  const userMessage = (message) => {
    const newMessage = {
      content: message,
      from: 'User',
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

  const botMessage = (message) => {
    const newMessage = {
      content: message,
      from: 'Bot',
      to: 'User',
      time: new Date(),
    };
    return newMessage;
  };

  const botAnswer = (newUserMessage) => {
    const initialTerms = ['Hello', 'Good', 'I want'];
    const endTerms = ['Goodbye', 'Bye', 'See you later'];

    switch (true) {
      case initialTerms.some((term) => newUserMessage.content.includes(term)):
        setNeedLogin(true);
        return botMessage(messagesFromBot.Login);
      case endTerms.some((term) => newUserMessage.content.includes(term)):
        return botMessage(messagesFromBot.Goodbye);
      case newUserMessage.content.includes('loan') && logged:
        setLoanOptions(true);
        return botMessage(messagesFromBot.Options);
      case newUserMessage.content.includes('loan') && !logged:
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
    <div>
      {needLogin && <RegisterForms />}
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
              if (e.key === 'Enter') {
                e.preventDefault();
                handleMessage();
              }
            }}
          />
          <button id="bottomID" type="button" onClick={handleMessage}>
            Send
          </button>
        </label>
      </form>
    </div>
  );
}
