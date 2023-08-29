import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../context/Context';
import RegisterForms from './RegisterForms';
import '../styles/chat.css';

export default function Chat() {
  const { messages, loanOptions, setMessages, setLoanOptions, needLogin } =
    useContext(AppContext);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const options = {
    a: 'Do you want to apply for a loan?',
    b: 'Loan conditions',
    c: 'Help',
  };

  const links = {
    a: 'https://example.com/application-form',
    b: 'https://example.com/loan-conditions',
    c: 'https://example.com/help',
  };

  const handleLoan = (message, link) => {
    const loanMessage = {
      content: message,
      from: 'User',
      to: 'Bot',
    };
    const botAnswer = {
      content: (
        <span>
          Here is the{' '}
          <a href={link} target="_blank" rel="noreferrer">
            link
          </a>
          .
        </span>
      ),
      from: 'Bot',
      to: 'User',
    };
    setMessages([...messages, loanMessage, botAnswer]);
    setLoanOptions(false);
  };

  return (
    <section className="chat-container" ref={chatContainerRef}>
      Chatbot
      <div className="messages-container">
        <div className="message-list">
          {messages.length > 0 &&
            messages.map(({ content, from }, index) => (
              <p
                key={index}
                className={`message ${
                  from === 'Bot' ? 'bot-message' : 'user-message'
                }`}
              >
                {content}
              </p>
            ))}
        </div>
      </div>
      {needLogin && <RegisterForms />}
      {loanOptions && (
        <div className="options-container">
          <button
            className="options-button"
            type="button"
            onClick={() => handleLoan(options.a, links.a)}
          >
            {options.a}
          </button>
          <button
            className="options-button"
            type="button"
            onClick={() => handleLoan(options.b, links.b)}
          >
            {options.b}
          </button>
          <button
            className="options-button"
            type="button"
            onClick={() => handleLoan(options.c, links.c)}
          >
            {options.c}
          </button>
        </div>
      )}
    </section>
  );
}
