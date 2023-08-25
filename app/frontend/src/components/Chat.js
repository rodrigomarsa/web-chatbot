import React, { useContext } from 'react';
import AppContext from '../context/Context';
import RegisterForms from './RegisterForms';

export default function Chat() {
  const { logged, username, messages } = useContext(AppContext);
  return (
    <div>
      {!logged && <RegisterForms />}
      <p>{logged && `Hello, ${username}`}</p>
      {messages.map(({ message }, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
