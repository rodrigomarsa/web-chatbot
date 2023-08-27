import React, { useContext, useEffect } from 'react';
import AppContext from '../context/Context';

export default function Chat() {
  const { messages, loanOptions, setMessages, setLoanOptions } =
    useContext(AppContext);

  useEffect(() => {
    // if (window.history.replaceState) {
    //   window.history.replaceState(null, null, window.location.href);
    // }
    const chatDiv = document.getElementById('bottomID');
    chatDiv.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
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

  const handleLoan = (message, link) => () => {
    const loanMessage = {
      content: message,
      from: 'User',
      to: 'Bot',
      time: new Date(),
    };
    const botAnswer = {
      content: (
        <div>
          Here is the <a href={link}>link</a>.
        </div>
      ),
      from: 'Bot',
      to: 'User',
      time: new Date(),
    };
    setMessages([...messages, loanMessage, botAnswer]);
    setLoanOptions(false);
  };

  return (
    <section>
      {messages.length > 0 &&
        messages.map(({ content }, index) => <p key={index}>{content}</p>)}
      {loanOptions && (
        <div>
          <button type="button" onClick={handleLoan(options.a, links.a)}>
            {options.a}
          </button>
          <button type="button" onClick={handleLoan(options.b, links.b)}>
            {options.b}
          </button>
          <button type="button" onClick={handleLoan(options.c, links.c)}>
            {options.c}
          </button>
        </div>
      )}
    </section>
  );
}
