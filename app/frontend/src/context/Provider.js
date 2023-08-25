import React, { useMemo, useState } from 'react';
import AppContext from './Context';

export default function AppProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [messages, setMessages] = useState([]);

  const values = useMemo(
    () => ({
      username,
      setUsername,
      password,
      setPassword,
      logged,
      setLogged,
      messages,
      setMessages,
    }),
    [
      username,
      setUsername,
      password,
      setPassword,
      logged,
      setLogged,
      messages,
      setMessages,
    ]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
